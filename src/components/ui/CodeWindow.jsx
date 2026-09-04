import { useMemo } from 'react'

/**
 * Minimal JavaScript tokenizer for the hero window. Small on purpose: pulling
 * in a full highlighter would cost more than the one snippet it renders.
 */
const TOKEN_RE = new RegExp(
  [
    '(\\/\\/[^\\n]*)', // 1 comment
    "('(?:[^'\\\\]|\\\\.)*'|\"(?:[^\"\\\\]|\\\\.)*\")", // 2 string
    '\\b(const|let|var|function|return|this|new|typeof)\\b', // 3 keyword
    '\\b(true|false|null|undefined)\\b', // 4 literal
    '\\b(\\d+(?:\\.\\d+)?)\\b', // 5 number
    '([A-Za-z_$][\\w$]*)(?=\\s*:)', // 6 property
    '([A-Za-z_$][\\w$]*)(?=\\s*\\()', // 7 call
    '([{}\\[\\]().,;:]|=>|&&|\\|\\||>=|<=|===|==|=|\\+|-|\\*)', // 8 punctuation
  ].join('|'),
  'g',
)

const GROUP_CLASS = [
  null,
  'tok-comment',
  'tok-str',
  'tok-key',
  'tok-bool',
  'tok-num',
  'tok-prop',
  'tok-fn',
  'tok-punc',
]

function tokenize(source) {
  const tokens = []
  let last = 0
  let match

  TOKEN_RE.lastIndex = 0
  while ((match = TOKEN_RE.exec(source)) !== null) {
    if (match.index > last) {
      tokens.push({ text: source.slice(last, match.index), cls: null })
    }

    const groupIndex = GROUP_CLASS.findIndex(
      (_, i) => i > 0 && match[i] !== undefined,
    )
    tokens.push({ text: match[0], cls: GROUP_CLASS[groupIndex] })
    last = match.index + match[0].length
  }

  if (last < source.length) {
    tokens.push({ text: source.slice(last), cls: null })
  }

  return tokens
}

export default function CodeWindow({ filename = 'developer.js', code }) {
  const tokens = useMemo(() => tokenize(code), [code])

  return (
    <div className="gradient-border">
      <div className="code-window bg-[#091121]">
        <div className="window-header">
          <div className="window-dot bg-red-500" />
          <div className="window-dot bg-yellow-500" />
          <div className="window-dot bg-green-500" />
          <span className="ml-2 flex items-center gap-2 text-sm text-gray-400">
            {filename}
          </span>
        </div>

        {/* Wide code scrolls inside the window instead of stretching the page. */}
        <div className="overflow-x-auto">
          <pre className="p-4 font-mono text-[12px] leading-relaxed sm:p-5 sm:text-[13px]">
            <code className="text-gray-300">
              {tokens.map((token, i) =>
                token.cls ? (
                  <span key={i} className={token.cls}>
                    {token.text}
                  </span>
                ) : (
                  token.text
                ),
              )}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
