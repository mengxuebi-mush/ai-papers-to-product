# AI Papers to Product

*Reading ML papers with a product designer's eye. 从论文到产品判断。*

**🌐 Live site → [mengxuebi-mush.github.io/ai-papers-to-product](https://mengxuebi-mush.github.io/ai-papers-to-product/)**

**🧭 Want to learn this way with your own AI agent? → [LEARNING_PATH.md](LEARNING_PATH.md)** (reading order, why these papers, the teaching method, and a prompt to paste)

A bilingual (中文 / English) study map built from foundational ML and LLM papers. Each card walks through **Problem → Method → Evidence → Limitations → Product implications**, and separates three kinds of claims: what the paper says (原文), what other research has found (已有研究), and my own inference (推测). The lens is enterprise AI agents: troubleshooting, root cause analysis, and the human–agent loop.

Built while preparing for NeurIPS 2026 (Atlanta) workshops on agent evaluation, continual learning for enterprise agents, human–agent teaming, and LLM-as-a-judge.

---

## Paper index

All credit for the research belongs to the original authors. The cards are personal study notes and summaries; please read and cite the original papers.

### 基础原理 · Foundations

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [Transformer](https://mengxuebi-mush.github.io/ai-papers-to-product/#attention) | [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin | NeurIPS 2017 |

### 从模型到助手 · From model to assistant

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [InstructGPT](https://mengxuebi-mush.github.io/ai-papers-to-product/#instructgpt) | [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) | Ouyang, Wu, Jiang, Almeida, Wainwright, et al. | NeurIPS 2022 |
| [DeepSeek-R1](https://mengxuebi-mush.github.io/ai-papers-to-product/#r1) | [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) | DeepSeek-AI | arXiv 2025 |

### Agent 怎么运作 · How agents work

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [ReAct](https://mengxuebi-mush.github.io/ai-papers-to-product/#react) | [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) | Yao, Zhao, Yu, Du, Shafran, Narasimhan, Cao | ICLR 2023 |
| [Reflexion](https://mengxuebi-mush.github.io/ai-papers-to-product/#reflexion) | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Shinn, Cassano, Berman, Gopinath, Narasimhan, Yao | NeurIPS 2023 |
| [MemGPT](https://mengxuebi-mush.github.io/ai-papers-to-product/#memgpt) | [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | Packer, Wooders, Lin, Fang, Patil, Stoica, Gonzalez | arXiv 2023 |

### 评估与信任 · Evaluation & trust

| Card | Paper | Authors | Venue |
|---|---|---|---|
| [τ-bench](https://mengxuebi-mush.github.io/ai-papers-to-product/#tau-bench) | [τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains](https://arxiv.org/abs/2406.12045) | Yao, Shinn, Razavi, Narasimhan | arXiv 2024 |
| [MT-Bench](https://mengxuebi-mush.github.io/ai-papers-to-product/#mt-bench) | [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) | Zheng, Chiang, Sheng, Zhuang, Wu, et al. | NeurIPS 2023 (Datasets & Benchmarks) |
| [Calibration](https://mengxuebi-mush.github.io/ai-papers-to-product/#calibration) | [Language Models (Mostly) Know What They Know](https://arxiv.org/abs/2207.05221) | Kadavath, Conerly, Askell, Henighan, Drain, et al. | arXiv 2022 |

### 概念课 · Concept lessons

| Card | Key references |
|---|---|
| [How models learn](https://mengxuebi-mush.github.io/ai-papers-to-product/#s-pre) (on the Pretraining page) | Kaplan et al., [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) (2020) · Hoffmann et al., [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556) (2022, "Chinchilla") |
| [Scoring shapes the model](https://mengxuebi-mush.github.io/ai-papers-to-product/#s-post) (on the Post-training page) | Goodhart, *Problems of Monetary Management: The U.K. Experience* (1975) · Strathern, "'Improving ratings': audit in the British University system", *European Review* (1997) · Kullback & Leibler, "On Information and Sufficiency", *Annals of Mathematical Statistics* (1951) · Gao, Schulman, Hilton, [Scaling Laws for Reward Model Overoptimization](https://arxiv.org/abs/2210.10760) (2022) |

### Also referenced in discussion

- Wang et al., [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171) (ICLR 2023)
- Turpin et al., [Language Models Don't Always Say What They Think](https://arxiv.org/abs/2305.04388) (NeurIPS 2023)
- Lanham et al., [Measuring Faithfulness in Chain-of-Thought Reasoning](https://arxiv.org/abs/2307.13702) (2023)
- Helff et al., [LLMs Gaming Verifiers: RLVR can Lead to Reward Hacking](https://arxiv.org/abs/2604.15149) (2026; abstract read only)

Items still being verified are listed in the site footer.

---

## Tools

- **[Term lookup](https://mengxuebi-mush.github.io/ai-papers-to-product/#abbr)**: one searchable page with two parts
  - **Acronyms**: three tiers (core / subfield / coined in one paper), each linked back to the card where it appears
  - **Humanizing words**: words like *belief*, *know*, *honest*, *lie*, *reason*, each paired with what is actually measurable and where the metaphor breaks. This table is my own conceptual mapping, not quotes from the papers

## Coming next

Context engineering, subagents and memory layers · RAG and prompt injection · fine-tuning / LoRA vs in-context learning

## About

By **Mushroom** ([@mengxuebi-mush](https://github.com/mengxuebi-mush)), product designer working on enterprise AI agent experiences. Written in collaboration with Claude. Not affiliated with any of the authors or their institutions; any errors in the summaries are mine.

Single self-contained `index.html`, no build step.
