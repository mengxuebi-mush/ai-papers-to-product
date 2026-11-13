# AI Papers to Product

*Reading ML papers with a product designer's eye. 从论文到产品判断。*

**🌐 Live site → [mengxuebi-mush.github.io/ai-papers-to-product](https://mengxuebi-mush.github.io/ai-papers-to-product/)**

**🧭 Want to learn this way with your own AI agent? → [llm/LEARNING_PATH.md](llm/LEARNING_PATH.md)** (reading order, why these papers, the teaching method, and a prompt to paste)

A bilingual (中文 / English) study map built from foundational ML and LLM papers. Each card walks through **Problem → Method → Evidence → Limitations → Product implications**, and separates three kinds of claims: what the paper says (原文), what other research has found (已有研究), and my own inference (推测). The lens is enterprise AI agents: troubleshooting, root cause analysis, and the human–agent loop.

Built while preparing for NeurIPS 2026 (Atlanta) workshops on agent evaluation, continual learning for enterprise agents, human–agent teaming, and LLM-as-a-judge.

## Site layout

The home page (`index.html`) splits the site into two kinds of pages that share nothing but that home page:

- **Learning tracks**: long, bilingual study maps, one folder per track, switched from the track menu at the top of every track page (`tracks.js`, the only file tracks share).
- **Paper posters**: one-page summaries of single papers, grouped in sets under `posters/`. They are not tracks and never appear in the track menu.

| Kind | Name | Folder | Status |
|---|---|---|---|
| Track | LLMs & agents | [`llm/`](llm/) · [LEARNING_PATH.md](llm/LEARNING_PATH.md) | ongoing |
| Track | Image models | `images/` | in progress on branch `track/image-models` |
| Track | Human–agent teaming | `hci/` | planned |
| Posters | NeurIPS 2026 agent trust | [`posters/neurips-2026/`](posters/neurips-2026/) | 2 of 8 posters |

Old links to the LLM track (`/ai-papers-to-product/#…`) still work: the home page forwards any `#hash` to `llm/`.

The paper index below covers the LLM track; each other track keeps its own README and learning path in its folder.

---

## Paper index

All credit for the research belongs to the original authors. The cards are personal study notes and summaries; please read and cite the original papers.

### 基础原理 · Foundations

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [Transformer](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#attention) | [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin | NeurIPS 2017 |

### 从模型到助手 · From model to assistant

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [InstructGPT](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#instructgpt) | [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) | Ouyang, Wu, Jiang, Almeida, Wainwright, et al. | NeurIPS 2022 |
| [DeepSeek-R1](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#r1) | [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) | DeepSeek-AI | arXiv 2025 |

### Agent 怎么运作 · How agents work

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [ReAct](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#react) | [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) | Yao, Zhao, Yu, Du, Shafran, Narasimhan, Cao | ICLR 2023 |
| [Reflexion](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#reflexion) | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Shinn, Cassano, Berman, Gopinath, Narasimhan, Yao | NeurIPS 2023 |
| [Voyager](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#voyager) | [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) | Wang, Xie, Jiang, Mandlekar, Xiao, Zhu, Fan, Anandkumar | arXiv 2023 |
| [MemGPT](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#memgpt) | [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | Packer, Wooders, Lin, Fang, Patil, Stoica, Gonzalez | arXiv 2023 |
| [Lost in the Middle](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#lost-middle) | [Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/abs/2307.03172) | Liu, Lin, Hewitt, Paranjape, Bevilacqua, Petroni, Liang | TACL 2024 |
| [Self-Evolving Agent Harness](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#harness-evo) (read for concepts) | [Self-evolving Agent Harness](https://arxiv.org/abs/2610.18813) | Wei, Guan, Zhu, Zhou, He, Zhou, Chen, Shen | arXiv 2026 |
| [RAG](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#rag) | [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) | Lewis, Perez, Piktus, Petroni, Karpukhin, Goyal, Küttler, Lewis, Yih, Rocktäschel, Riedel, Kiela | NeurIPS 2020 |

### 评估与信任 · Evaluation & trust

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [τ-bench](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#tau-bench) | [τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045) | Yao, Shinn, Razavi, Narasimhan | arXiv 2024 |
| [MT-Bench](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#mt-bench) | [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) | Zheng, Chiang, Sheng, Zhuang, Wu, et al. | NeurIPS 2023 (Datasets & Benchmarks) |
| [Calibration](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#calibration) | [Language Models (Mostly) Know What They Know](https://arxiv.org/abs/2207.05221) | Kadavath, Conerly, Askell, Henighan, Drain, et al. | arXiv 2022 |

### 概念课 · Concept lessons

| Card | Key references |
|---|---|
| [How models learn](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#s-pre) (on the Pretraining page) | Kaplan et al., [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) (2020) · Hoffmann et al., [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556) (2022, "Chinchilla") |
| [Scoring shapes the model](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#s-post) (on the Post-training page) | Goodhart, *Problems of Monetary Management: The U.K. Experience* (1975) · Strathern, "'Improving ratings': audit in the British University system", *European Review* (1997) · Kullback & Leibler, "On Information and Sufficiency", *Annals of Mathematical Statistics* (1951) · Gao, Schulman, Hilton, [Scaling Laws for Reward Model Overoptimization](https://arxiv.org/abs/2210.10760) (2022) |
| [Managing context](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#c-context) (linked from the Harness page) | Liu et al., [Lost in the Middle](https://arxiv.org/abs/2307.03172) (2023) · Lewis et al., [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) (2020) · Park et al., [Generative Agents](https://arxiv.org/abs/2304.03442) (2023) · Schick et al., [Toolformer](https://arxiv.org/abs/2302.04761) (2023) · Wang et al., [Voyager](https://arxiv.org/abs/2305.16291) (2023) · Wu et al., [AutoGen](https://arxiv.org/abs/2308.08155) (2023) · Docs: [CLAUDE.md](https://code.claude.com/docs/en/memory), [AGENTS.md](https://agents.md/), [MCP](https://modelcontextprotocol.io/specification/2025-06-18/architecture), [Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), [subagents](https://code.claude.com/docs/en/sub-agents), [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| [Designing RAG today](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#c-rag) (linked from the Harness page) | Lewis et al., [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401) (2020) · Liu et al., [Lost in the Middle](https://arxiv.org/abs/2307.03172) (2023) · Docs: [Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval), [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) · Industry: [The retrieval rebuild](https://venturebeat.com/data/the-retrieval-rebuild-why-hybrid-retrieval-intent-tripled-as-enterprise-rag-programs-hit-the-scale-wall) (VentureBeat, 2026) |
| [Prompt injection](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#c-injection) (linked from the Harness page) | Greshake et al., [Not what you've signed up for](https://arxiv.org/abs/2302.12173) (2023) · Debenedetti et al., [Defeating Prompt Injections by Design](https://arxiv.org/abs/2503.18813) (CaMeL, 2025) |

### Also referenced in discussion

- Wang et al., [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171) (ICLR 2023)
- Turpin et al., [Language Models Don't Always Say What They Think](https://arxiv.org/abs/2305.04388) (NeurIPS 2023)
- Lanham et al., [Measuring Faithfulness in Chain-of-Thought Reasoning](https://arxiv.org/abs/2307.13702) (2023)
- Helff et al., [LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking](https://arxiv.org/abs/2604.15149) (2026; abstract read only)

Items still being verified are listed in the site footer.

---

## Tools

- **[Term lookup](https://mengxuebi-mush.github.io/ai-papers-to-product/llm/#abbr)**: one searchable page with two parts
  - **Acronyms**: three tiers (core / subfield / coined in one paper), each linked back to the card where it appears
  - **Humanizing words**: words like *belief*, *know*, *honest*, *lie*, *reason*, each paired with what is actually measurable and where the metaphor breaks. This table is my own conceptual mapping, not quotes from the papers

## Posters

**[NeurIPS 2026 agent trust posters](https://mengxuebi-mush.github.io/ai-papers-to-product/posters/neurips-2026/)** ([`posters/neurips-2026/`](posters/neurips-2026/)): one poster per paper from eight agent-trust papers, covering the essence, core idea, limitations, how to apply it, and questions for the authors. A new set of posters gets its own folder under `posters/` and a row on the home page.

## Coming next

Context engineering, subagents and memory layers · prompt injection · fine-tuning / LoRA vs in-context learning

## About

By **Mushroom** ([@mengxuebi-mush](https://github.com/mengxuebi-mush)), product designer working on enterprise AI agent experiences. Written in collaboration with Claude. Not affiliated with any of the authors or their institutions; any errors in the summaries are mine.

No build step. Each track is one self-contained page in its own folder (the LLM track is `index.html` at the root). Tracks share no styles or scripts except [`tracks.js`](tracks.js), the switcher, which changes only when a track is added or launched. So work on one track never touches another track's files, and branches for different tracks merge without conflicts.
