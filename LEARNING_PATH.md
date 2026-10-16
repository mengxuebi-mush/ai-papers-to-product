# Learning Path

**For:** people who are curious about how AI actually works, but get scared off by the jargon. No ML background needed.
**How to use:** give this file (or its URL) to your own AI agent, fill in the blanks in [the prompt](#3-the-prompt-to-paste), and learn one paper at a time.

This repo's map is my own set of study notes. What you can borrow is the *path*: which papers, in what order, and the teaching method. Build your own map from it.

---

## 1. The path: which papers, and why these

**How I chose.** Each item below introduced an idea that later papers and conference talks simply assume you know. Together they answer one question: *how do we know an AI did the job well, and how does it get better when it didn't?* I read them through a product designer's eye, so every one is also a lesson about what to design for or watch out for. Different goals would give a different list.

| # | Item | The one idea to leave with | Read it after | Source |
|---|---|---|---|---|
| 1 | **How models learn** (concept, on the Pretraining page) | Text becomes tokens, then numbers (embeddings) whose meaning is learned. A model is a function with knobs; training turns the knobs to lower a score called *loss*. | nothing | Teach it yourself; see [the site's Pretraining page](https://mengxuebi-mush.github.io/ai-papers-to-product/#s-pre) for the shape |
| 2 | **Scoring shapes the model** (concept, on the Post-training page) | What you score is what you get: cross-entropy, Goodhart's law, KL penalty. | 1 | [the site's card](https://mengxuebi-mush.github.io/ai-papers-to-product/#s-post) |
| 3 | **Attention Is All You Need** (2017) | Tokens look at each other (self-attention). Skim; don't derive. | 1 | [arXiv 1706.03762](https://arxiv.org/abs/1706.03762) |
| 4 | **InstructGPT** (2022) | A base model only continues text. Post-training turns it into an assistant by learning a scorer of human preference (RLHF). | 2, 3 | [arXiv 2203.02155](https://arxiv.org/abs/2203.02155) |
| 5 | **ReAct** (2022) | The agent loop: think, act with a tool, observe, repeat. | 3, 4 | [arXiv 2210.03629](https://arxiv.org/abs/2210.03629) |
| 6 | **Reflexion** (2023) | Learn from failure without changing the model: write lessons into memory. | 5 | [arXiv 2303.11366](https://arxiv.org/abs/2303.11366) |
| 7 | **MemGPT** (2023) | The context window is finite, so memory has to be managed like an operating system does. | 3, 5 | [arXiv 2310.08560](https://arxiv.org/abs/2310.08560) |
| 7a | **Lost in the Middle** (2023) | Fitting in the window is not the same as being used. Put the answer in the middle of a long input and accuracy drops, sometimes below giving no documents at all. | 3, 7 | [arXiv 2307.03172](https://arxiv.org/abs/2307.03172) |
| 7b | **Managing context** (concept, linked from the Harness page) | Everything the model knows this turn sits in one fixed-size window. Rules files, retrieval, memory, tools, skills and subagents are ways to choose what goes in. | 5, 7, 7a | [the site's page](https://mengxuebi-mush.github.io/ai-papers-to-product/#c-context) |
| 8 | **τ-bench** (2024) | Succeeding once is not reliable. Measure whether it succeeds every time (pass^k). | 5 | [arXiv 2406.12045](https://arxiv.org/abs/2406.12045) |
| 9 | **MT-Bench / LLM-as-a-judge** (2023) | Using a model to grade models works, and has measurable biases. | 4 | [arXiv 2306.05685](https://arxiv.org/abs/2306.05685) |
| 10 | **Language Models (Mostly) Know What They Know** (2022) | Does stated confidence match how often the answer is right? RLHF can break that match. | 2, 4 | [arXiv 2207.05221](https://arxiv.org/abs/2207.05221) |
| 11 | **DeepSeek-R1** (2025) | If answers can be checked automatically, rewarding only right/wrong is enough to grow long reasoning. Rule-based scorers can still be gamed. | 2, 4 | [arXiv 2501.12948](https://arxiv.org/abs/2501.12948) |

**Why this order, in one example.** Goodhart's law (item 2) has to land before InstructGPT (item 4), because only then can you see *why* learning from a human-preference scorer can go wrong. The "Read it after" column is the dependency list. If a step feels hard, the missing piece is almost always in that column.

**Not covered yet:** full paper pages for RAG, Generative Agents and Voyager (summarized on the Managing context page), prompt injection, fine-tuning vs in-context learning. These are planned. Human–agent teaming (HCI) is planned as a separate repo.

Full citations and authors: [README](README.md#paper-index).

---

## 2. The teaching method

This is the part worth copying. Ask your agent to follow all of it.

**Each lesson runs in this order:**
1. **Where it sits.** One or two sentences on what came before and why this paper exists.
2. **A prediction question.** The agent asks you something and *waits for your answer* before revealing anything. Guessing first is how the idea sticks.
3. **Problem → Method → Evidence → Limitations → Product implications.** Each with the exact place in the paper (section, figure or table).
4. **A one-sentence check.** You explain it back; the agent corrects only what's off.

**Tag every claim with where it comes from:**
- **[Paper §x]**: the paper itself says this, with a section, figure or table number.
- **[Prior research]**: other published work. If the agent hasn't opened the source, it adds "to verify".
- **[Inference]**: the agent's own reasoning. Keep these few, and always labeled.

Facts first, inference after. A beginner can't yet tell which is which, so the labels do that work.

**Language rules (this is what keeps jargon from scaring you):**
- Define each term the first time it appears: plain-language analogy first, then the precise term, then the original English definition if one exists.
- No acronym without its expansion.
- Explain the concept and how it happens (the mechanism, with an analogy) before naming any benchmark, dataset, loss function or other jargon. A list of test names is not an explanation.
- Keep the names of tests, datasets and formulas out of the main sentence. Say what a test measures in plain words, and put the name, the definition or the formula behind a hover or tap note (or a footnote).
- Mark analogies as analogies.
- Human words (*believes, knows, honest, lies, wants*) are fine as a shortcut, because they help you grasp the behavior fast. But put them in quotation marks, and follow with a few sentences on what is actually happening inside: what is computed, what is measured, and where the metaphor stops working. Otherwise you may come away with the wrong mechanism. The site's [Term lookup](https://mengxuebi-mush.github.io/ai-papers-to-product/#abbr) has a table of these. Example: the model is "honest" about uncertainty → it outputs a probability, and when it says 70%, it is right about 70% of the time; there is no intent to tell the truth.

**Read the paper, don't recall it.** The agent opens the arXiv link and takes numbers only from the source. If it can't open the paper, it says so instead of filling in from memory. This one matters most: from titles alone, an agent will happily invent plausible numbers.

**Pace:** short answers, one concept at a time. Go deeper only when you ask.

---

## 3. The prompt to paste

Fill in the three brackets, then paste everything below into your agent along with this file or its URL.

```text
I want to learn how modern AI works, using the reading path and teaching
method in LEARNING_PATH.md (attached / at the URL below).

About me:
- Background: [e.g. "product manager, no coding"]
- Field I work in, for examples: [e.g. "healthcare scheduling"]
- Language for explanations: [e.g. "English" / "中文, keep English terms"]

Rules:
1. Take me through the papers in the order in Section 1, one at a time.
   Start with item 1. Ask me which one to start with if I already know some.
2. Follow Section 2 exactly: prediction question first (wait for my answer),
   then Problem, Method, Evidence, Limitations, Product implications.
   Tag every claim [Paper §x] / [Prior research] / [Inference].
3. Open the actual paper (links in Section 1). Take numbers only from it.
   If you can't open it, tell me instead of answering from memory.
4. Explain every term in plain language with an everyday example from my
   field, then give the precise term. Never use an acronym unexpanded.
   Explain what a concept means and how it happens; don't stack test
   names, dataset names or equations in place of an explanation. Put those
   names and formulas in a hover note or footnote, not the main sentence.
5. You may use human words like "believes", "knows", "honest" or "lies"
   as shortcuts, but always in quotation marks, followed by a few
   sentences on the actual mechanism and where the metaphor breaks.
6. Keep each reply short. Ask one question at a time.
7. At the end of each paper, ask me to say the main idea in one sentence.

Start by asking me anything you need to know about my background
(two questions at most), then begin with item 1.
```

---

## 4. Build your own map

After each paper (and again when you finish), ask your agent to turn what you learned into **your own map**. I'm not prescribing the format: notes, cards, a mind map, a web page, whatever you'll actually reopen.

Ask it to hold to this bar:
- **Your words, your field.** Use examples from your work, not mine. Don't copy this site's look or text.
- **Organized by what depends on what**, not by date.
- **One card per paper** with the same five parts as the lesson, and every claim tagged.
- **A glossary** where each term has a plain-language line and a precise line.
- **Credit the authors.** Link each paper to its original source. Your map is notes, not the research.
- **Keep a "to verify" list** of anything the agent couldn't check against a source.

---

## 5. A few cautions

- **Check your agent.** Pick two numbers from any lesson and find them in the paper yourself. If they don't match, tell the agent and ask it to re-read.
- **My items marked "to verify"** are listed in the footer of [the site](https://mengxuebi-mush.github.io/ai-papers-to-product/). I haven't confirmed them against sources yet.
- **Change the path.** Skip what you know. If a paper is too dense, ask for a gentler lead-in or read the abstract and one figure first.
- **This is a starting point, not authority.** The list reflects what I was preparing for at the time: evaluating and trusting AI agents.
