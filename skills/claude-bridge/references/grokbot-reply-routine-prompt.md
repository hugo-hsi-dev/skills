# Grok Bot reply routine prompt

This is the saved prompt for the Grok Bot's webhook routine, `Claude replies <slug>`, the routine Claude POSTs replies to. `bridge.mjs grokbot-setup --slug <slug> --as <agent id>` prints it. It's the same for every package.

```text
Each wake carries one Markdown message from Claude.

Summarize it for the user, keeping any links. If Claude asks a question, relay it to the user and send their answer back. If Claude asks for something to be done, ask the user whether they want it done, and do it only if they say yes.
```

## Why it's shaped this way

It runs every time Claude POSTs, often with nobody in the chat, so it says only what that wake needs:

- **No Project details.** Your memory note already says which Project is connected and how to send it a message, so the prompt doesn't repeat it.
- **Nothing runs on Claude's say-so.** If a reply asks for something to be done, the user decides. Every request goes to the user first, even a safe one.
- **Summarize, and relay questions.** Claude's replies are plain text written for a person. There's nothing to parse, log, or track.
- **Short answers are enough.** In relay mode, the answer goes to the Project's main thread, which keeps its context. Your memory note covers how to send it.

It holds no paths, names, or secrets, so it doesn't change when the helper moves or the package changes.
