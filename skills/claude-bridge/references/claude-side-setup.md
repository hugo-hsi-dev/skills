# Claude-side paste prompt

A Project package is one Claude Project, its own cloud environment, and the bridge into it. Setup has one command, and it runs on the Grok Bot side. When the bot finishes its half, it gives the user one self-contained prompt to paste into the Claude Project's main thread. That prompt carries the handoff block, asks the main thread to write the "ONYO messages" section of the Project instructions itself, and lists the clicks that are left. Claude has no separate setup command.

Build the prompt with `bridge.mjs handoff --slug <slug> --as <agent id>`, which fills in this template from the registry. If you have to build it by hand:

- Replace `{{PROJECT_INSTRUCTIONS}}` with the section from [`claude-project-instructions.md`](claude-project-instructions.md), or with "(Not needed in direct mode.)".
- Replace `{{ROUTINE_PROMPT}}` with the relay prompt from [`claude-routine-relay-prompt.md`](claude-routine-relay-prompt.md), or with its direct-mode prompt in direct mode.
- Fill in every `<PLACEHOLDER>`.

Send the result as one code block. Nothing in it is secret.

```text
Set up this Project so another system I use (an external assistant) can send it messages and get replies. My assistant prepared everything below. Nothing here is secret, and you must never ask me to paste the webhook key or the routine token into this chat.

=== CLAUDE PROJECT PACKAGE HANDOFF v3 ===
project: <PROJECT_NAME>
project_slug: <SLUG>
environment: <ENVIRONMENT>
relay_routine: <RELAY_ROUTINE>
repo: <REPO>
mode: <MODE>
webhook_url: <WEBHOOK_URL>
webhook_auth: a Bearer network secret for host api2.cursor.sh in the environment. I paste the key into Claude myself.
=== END HANDOFF ===

In relay mode, the relay routine forwards each message to this Project's main thread, and you handle it as the PROJECT INSTRUCTIONS below say. In direct mode, this thread only helps with setup, and the routine does the work itself. Do everything you can yourself, then give me only the clicks you couldn't do:

1. Relay mode only: add the PROJECT INSTRUCTIONS section below to this Project's instructions yourself, replacing any older "ONYO messages", "Onyo Tasks", or "Claude bridge" section and keeping everything else. Tell me in one line that it's saved.

2. Make sure the handoff's repo is attached where the mode needs it: on this Project in relay mode (add it yourself), on the routine in direct mode.

3. Give me a numbered checklist of only the clicks left, each with its exact value, and put anything I have to paste in its own code block:
   a. Create this Project's cloud environment, named after the handoff's environment. Don't edit Default or reuse an environment other Projects use. At claude.ai/code, click the cloud icon above the message box, choose Cloud, then Add cloud environment. Set Network access to Custom, add api2.cursor.sh to Allowed domains, keep "Also include default list of common package managers" checked, and create it.
   b. Open that environment again for editing (hover, then the settings icon). Under Network secrets, choose Add secret, credential type Bearer. Name it "Webhook <SLUG>", set Allowed websites to api2.cursor.sh, keep the Authorization header with prefix Bearer, and paste the webhook key from my assistant's link as the value. Select Connect.
   c. In Project settings > Environment, choose the handoff's environment. Changes reach new threads, not threads already running.
   d. Create the relay routine, named after the handoff's relay_routine, with the ROUTINE PROMPT below as its prompt. Below the Instructions box, select the Project's environment with the cloud icon, because routines don't use the Project's environment. In relay mode, keep its claude-code-remote connector on and give it no repositories (if the form requires one, add the handoff's repo). In direct mode, attach the handoff's repo.
   e. On that routine, click Add another trigger and choose API. Before you click Generate token, tell my assistant you're ready, because the token is shown only once. Copy the fire URL and the token straight into my assistant's secret prompts, not into this chat.
   Then stop. My assistant sends a test message once the token is stored.

Keep your messages short.

=== PROJECT INSTRUCTIONS ===
{{PROJECT_INSTRUCTIONS}}
=== END PROJECT INSTRUCTIONS ===

=== ROUTINE PROMPT ===
{{ROUTINE_PROMPT}}
=== END ROUTINE PROMPT ===
```

## What the main thread can and can't do

- **It can:** change the Project instructions and add a repository, so the prompt asks it to do both itself.
- **It can't:** create or edit cloud environments, add network secrets, pick the Project's environment, create routines, or generate tokens. Those stay as clicks for the user, listed with exact values.
- **The test message proves the return path.** The paste asks for no POST of its own. The bot's first message after the token is stored is the test.
- **Team and Enterprise plans** have no Network secrets section. The bot tells the user about the variable alternative itself, outside this paste (see the walkthrough), so the prompt stays one path.
- **Changing the rules later.** Ask the main thread to replace its "ONYO messages" section with the new one. The relay prompt never changes.
