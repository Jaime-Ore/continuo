// Built by docs/manim/continuo/publish.py. Do not edit by hand.
window.TOPICS = [
 {
  "n": "0",
  "name": "Continuo: how it works",
  "lessons": [
   {
    "id": "0.1",
    "title": "Continuo in three minutes",
    "teaches": "The whole chain, string to drums and bass: pickup, board, FPGA, laptop, speakers; why it predicts the next 16th",
    "status": "done",
    "seconds": 174.1,
    "video": "videos/0.1-continuo-in-three-minutes.mp4",
    "subs": "videos/0.1-continuo-in-three-minutes.vtt",
    "poster": "videos/thumbs/0.1.jpg"
   },
   {
    "id": "0.2",
    "title": "Hearing each string",
    "teaches": "The hexaphonic GK-3 pickup, one coil per string; Sena's front-end board, six channels digitised together at 96 kHz",
    "status": "done",
    "seconds": 197.5,
    "video": "videos/0.2-hearing-each-string.mp4",
    "subs": "videos/0.2-hearing-each-string.vtt",
    "poster": "videos/thumbs/0.2.jpg"
   },
   {
    "id": "0.3",
    "title": "Finding the notes on the board",
    "teaches": "The ZCU102: six note detectors (start, how hard, end), six YIN pitch cores, one message per note to the laptop",
    "status": "done",
    "seconds": 245.4,
    "video": "videos/0.3-finding-the-notes-on-the-board.mp4",
    "subs": "videos/0.3-finding-the-notes-on-the-board.vtt",
    "poster": "videos/thumbs/0.3.jpg"
   },
   {
    "id": "0.4",
    "title": "The band on the laptop",
    "teaches": "The 16th grid and the count-in; the drummer decides each 16th before it happens from the guitar alone; the bassist hears the guitar, the held notes and the drums, and picks one of 12 notes up from the lowest",
    "status": "done",
    "seconds": 269.5,
    "video": "videos/0.4-the-band-on-the-laptop.mp4",
    "subs": "videos/0.4-the-band-on-the-laptop.vtt",
    "poster": "videos/thumbs/0.4.jpg"
   },
   {
    "id": "0.5",
    "title": "Fast enough to play along",
    "teaches": "The timing budget from measured numbers only, and why one step ahead; what was never measured",
    "status": "done",
    "seconds": 241.8,
    "video": "videos/0.5-fast-enough-to-play-along.mp4",
    "subs": "videos/0.5-fast-enough-to-play-along.vtt",
    "poster": "videos/thumbs/0.5.jpg"
   }
  ],
  "planned": []
 },
 {
  "n": "1",
  "name": "The system, end to end",
  "lessons": [
   {
    "id": "1.1",
    "title": "The whole chain",
    "teaches": "Pickup to speaker, the packets for each note, the one-slot budget, where it stands",
    "status": "done, rules applied",
    "seconds": 267.2,
    "video": "videos/1.1-whole-chain.mp4",
    "subs": "videos/1.1-whole-chain.vtt",
    "poster": "videos/thumbs/1.1.jpg"
   },
   {
    "id": "1.2",
    "title": "The slot grid",
    "teaches": "Time to slots, the five inputs, the one-slot shift, nine outputs",
    "status": "done, rules applied",
    "seconds": 200.5,
    "video": "videos/1.2-slot-grid.mp4",
    "subs": "videos/1.2-slot-grid.vtt",
    "poster": "videos/thumbs/1.2.jpg"
   },
   {
    "id": "1.3",
    "title": "The live loop",
    "teaches": "Placing plucks, LATE and VOID, the count-in fit, the tempo tracker, one slot in order, segments, the crash rule, the replay check",
    "status": "done",
    "seconds": 399.1,
    "video": "videos/1.3-live-loop.mp4",
    "subs": "videos/1.3-live-loop.vtt",
    "poster": "videos/thumbs/1.3.jpg"
   },
   {
    "id": "1.4",
    "title": "Timing, honestly",
    "teaches": "The decision time, what the window holds, median/percentile/worst, warm and cold, timer slack, reported vs measured, what is unmeasured",
    "status": "done",
    "seconds": 361.4,
    "video": "videos/1.4-timing.mp4",
    "subs": "videos/1.4-timing.vtt",
    "poster": "videos/thumbs/1.4.jpg"
   }
  ],
  "planned": []
 },
 {
  "n": "2",
  "name": "The data: Lakh and XMIDI",
  "lessons": [
   {
    "id": "2.1",
    "title": "Two corpora, and why",
    "teaches": "Lakh, XMIDI and Groove as the judge; what each is for, which models use which",
    "status": "done",
    "seconds": 334.4,
    "video": "videos/2.1-two-corpora.mp4",
    "subs": "videos/2.1-two-corpora.vtt",
    "poster": "videos/thumbs/2.1.jpg"
   },
   {
    "id": "2.2",
    "title": "Lakh: 178,561 files to 52,824 songs",
    "teaches": "MIDI basics (channels, programs, drums on channel 10), the five-stage filter",
    "status": "done",
    "seconds": 484.4,
    "video": "videos/2.2-lakh-filter.mp4",
    "subs": "videos/2.2-lakh-filter.vtt",
    "poster": "videos/thumbs/2.2.jpg"
   },
   {
    "id": "2.3",
    "title": "Putting music on the grid",
    "teaches": "Bars and time signatures, quantising, micro-timing, swing (shared)",
    "status": "done",
    "seconds": 541.9,
    "video": "videos/2.3-on-the-grid.mp4",
    "subs": "videos/2.3-on-the-grid.vtt",
    "poster": "videos/thumbs/2.3.jpg"
   },
   {
    "id": "2.4",
    "title": "Lakh: split by song, and the leak",
    "teaches": "Why a file split leaks, union-find on song identity, fingerprints, the 5.9% lower bound",
    "status": "done",
    "seconds": 664.7,
    "video": "videos/2.4-lakh-split-and-leak.mp4",
    "subs": "videos/2.4-lakh-split-and-leak.vtt",
    "poster": "videos/thumbs/2.4.jpg"
   },
   {
    "id": "2.5",
    "title": "Genre labels",
    "teaches": "tagtraum CD2 against MidiCaps against XMIDI's human annotators",
    "status": "done",
    "seconds": 546.7,
    "video": "videos/2.5-genre-labels.mp4",
    "subs": "videos/2.5-genre-labels.vtt",
    "poster": "videos/thumbs/2.5.jpg"
   },
   {
    "id": "2.6",
    "title": "XMIDI: 108,023 files to 43,158 clean songs",
    "teaches": "The usable chain, removing Lakh overlaps and twins, the 119 bpm surprise",
    "status": "done",
    "seconds": 571.9,
    "video": "videos/2.6-xmidi-clean.mp4",
    "subs": "videos/2.6-xmidi-clean.vtt",
    "poster": "videos/thumbs/2.6.jpg"
   },
   {
    "id": "2.7",
    "title": "XMIDI: a split without song IDs",
    "teaches": "Twin clustering, genre and emotion lists, counts per side",
    "status": "done",
    "seconds": 463.8,
    "video": "videos/2.7-xmidi-split.mp4",
    "subs": "videos/2.7-xmidi-split.vtt",
    "poster": "videos/thumbs/2.7.jpg"
   },
   {
    "id": "2.8",
    "title": "From songs to training batches",
    "teaches": "Store, cache, loader, chunks of 512, padding and masks (shared)",
    "status": "done",
    "seconds": 417.1,
    "video": "videos/2.8-batches.mp4",
    "subs": "videos/2.8-batches.vtt",
    "poster": "videos/thumbs/2.8.jpg"
   }
  ],
  "planned": []
 },
 {
  "n": "3",
  "name": "How the models learn",
  "lessons": [
   {
    "id": "3.1",
    "title": "From a neuron to a network",
    "teaches": "Weights, linear layers, activations, what \"learning\" changes",
    "status": "done",
    "seconds": 542.9,
    "video": "videos/3.1-neuron-to-network.mp4",
    "subs": "videos/3.1-neuron-to-network.vtt",
    "poster": "videos/thumbs/3.1.jpg"
   },
   {
    "id": "3.2",
    "title": "A loss for nine drums",
    "teaches": "Sigmoid, binary cross-entropy, rare drums and the pos-weight cap",
    "status": "done",
    "seconds": 562.2,
    "video": "videos/3.2-loss-for-nine-drums.mp4",
    "subs": "videos/3.2-loss-for-nine-drums.vtt",
    "poster": "videos/thumbs/3.2.jpg"
   },
   {
    "id": "3.3",
    "title": "Gradient descent and Adam",
    "teaches": "Gradients, learning rate, batches, epochs, warm-up, clipping",
    "status": "done",
    "seconds": 547.6,
    "video": "videos/3.3-gradient-descent-and-adam.mp4",
    "subs": "videos/3.3-gradient-descent-and-adam.vtt",
    "poster": "videos/thumbs/3.3.jpg"
   },
   {
    "id": "3.4",
    "title": "Training a causal sequence model",
    "teaches": "State carried across chunks, truncated backprop, teacher forcing",
    "status": "done",
    "seconds": 556.2,
    "video": "videos/3.4-training-a-sequence-model.mp4",
    "subs": "videos/3.4-training-a-sequence-model.vtt",
    "poster": "videos/thumbs/3.4.jpg"
   },
   {
    "id": "3.5",
    "title": "Validation and the epoch lottery",
    "teaches": "Overfitting, why validation loss can't rank drummers",
    "status": "done",
    "seconds": 444.7,
    "video": "videos/3.5-validation-and-the-epoch-lottery.mp4",
    "subs": "videos/3.5-validation-and-the-epoch-lottery.vtt",
    "poster": "videos/thumbs/3.5.jpg"
   }
  ],
  "planned": []
 },
 {
  "n": "4",
  "name": "The architectures",
  "lessons": [
   {
    "id": "4.0",
    "title": "The contract",
    "teaches": "What every candidate must obey; options A, B and C; parameter budgets (near equal: the transformer is 12% larger, finding #30)",
    "status": "done",
    "seconds": 506.6,
    "video": "videos/4.0-the-contract.mp4",
    "subs": "videos/4.0-the-contract.vtt",
    "poster": "videos/thumbs/4.0.jpg"
   },
   {
    "id": "4.1",
    "title": "Recurrent nets, and why they forget",
    "teaches": "A loop with a hidden state; vanishing gradients",
    "status": "done",
    "seconds": 465.5,
    "video": "videos/4.1-recurrent-nets-and-forgetting.mp4",
    "subs": "videos/4.1-recurrent-nets-and-forgetting.vtt",
    "poster": "videos/thumbs/4.1.jpg"
   },
   {
    "id": "4.2",
    "title": "Inside the LSTM",
    "teaches": "The cell state and the three gates, one equation at a time",
    "status": "done",
    "seconds": 582.3,
    "video": "videos/4.2-inside-the-lstm.mp4",
    "subs": "videos/4.2-inside-the-lstm.vtt",
    "poster": "videos/thumbs/4.2.jpg"
   },
   {
    "id": "4.3",
    "title": "Our LSTM in code",
    "teaches": "model.py, state carry live, 512 numbers of memory",
    "status": "done",
    "seconds": 535.6,
    "video": "videos/4.3-our-lstm-in-code.mp4",
    "subs": "videos/4.3-our-lstm-in-code.vtt",
    "poster": "videos/thumbs/4.3.jpg"
   },
   {
    "id": "4.4",
    "title": "State-space models",
    "teaches": "From a spring and damper to x' = Ax + Bu",
    "status": "done",
    "seconds": 501.7,
    "video": "videos/4.4-state-space-models.mp4",
    "subs": "videos/4.4-state-space-models.vtt",
    "poster": "videos/thumbs/4.4.jpg"
   },
   {
    "id": "4.5",
    "title": "S4D",
    "teaches": "Discretising, the diagonal trick, recurrence versus convolution",
    "status": "done",
    "seconds": 681.4,
    "video": "videos/4.5-s4d.mp4",
    "subs": "videos/4.5-s4d.vtt",
    "poster": "videos/thumbs/4.5.jpg"
   },
   {
    "id": "4.6",
    "title": "Our S4D in code",
    "teaches": "The layer, its state, why it is cheap live",
    "status": "done",
    "seconds": 493.4,
    "video": "videos/4.6-our-s4d-in-code.mp4",
    "subs": "videos/4.6-our-s4d-in-code.vtt",
    "poster": "videos/thumbs/4.6.jpg"
   },
   {
    "id": "4.7.0",
    "title": "Intro: the causal transformer",
    "teaches": "The whole idea in one pass (the B5 script, rewritten to the rules)",
    "status": "done",
    "seconds": 572.9,
    "video": "videos/4.7.00-the-causal-transformer.mp4",
    "subs": "videos/4.7.00-the-causal-transformer.vtt",
    "poster": "videos/thumbs/4.7.0.jpg"
   },
   {
    "id": "4.7.1",
    "title": "Slots as tokens",
    "teaches": "Tokens, embeddings, the input projection 5 to 96, the worked slot's vector",
    "status": "done",
    "seconds": 347.6,
    "video": "videos/4.7.01-slots-as-tokens.mp4",
    "subs": "videos/4.7.01-slots-as-tokens.vtt",
    "poster": "videos/thumbs/4.7.1.jpg"
   },
   {
    "id": "4.7.2",
    "title": "The bar phase",
    "teaches": "Why distance alone cannot find the downbeat, the 16-entry table, added not joined, the fairness caveat",
    "status": "done",
    "seconds": 412.2,
    "video": "videos/4.7.02-the-bar-phase.mp4",
    "subs": "videos/4.7.02-the-bar-phase.vtt",
    "poster": "videos/thumbs/4.7.2.jpg"
   },
   {
    "id": "4.7.3",
    "title": "Dot products",
    "teaches": "Vectors as arrows, the dot product as agreement, length and angle, worked in 3 and 24 numbers",
    "status": "done",
    "seconds": 402.9,
    "video": "videos/4.7.03-dot-products.mp4",
    "subs": "videos/4.7.03-dot-products.vtt",
    "poster": "videos/thumbs/4.7.3.jpg"
   },
   {
    "id": "4.7.4",
    "title": "Attention, the maths",
    "teaches": "Scores, scaling by the square root of 24, softmax built up, the weighted sum of values",
    "status": "done",
    "seconds": 579.4,
    "video": "videos/4.7.04-attention-the-maths.mp4",
    "subs": "videos/4.7.04-attention-the-maths.vtt",
    "poster": "videos/thumbs/4.7.4.jpg"
   },
   {
    "id": "4.7.5",
    "title": "Queries, keys and values",
    "teaches": "Why three roles, the one 96 to 288 layer, the worked slot's q, k and v",
    "status": "done",
    "seconds": 378.2,
    "video": "videos/4.7.05-queries-keys-values.mp4",
    "subs": "videos/4.7.05-queries-keys-values.vtt",
    "poster": "videos/thumbs/4.7.5.jpg"
   },
   {
    "id": "4.7.6",
    "title": "Four heads",
    "teaches": "Split into four of 24, attend separately, join and project; what T128's heads look at",
    "status": "done",
    "seconds": 441.4,
    "video": "videos/4.7.06-four-heads.mp4",
    "subs": "videos/4.7.06-four-heads.vtt",
    "poster": "videos/thumbs/4.7.6.jpg"
   },
   {
    "id": "4.7.7",
    "title": "The causal band mask",
    "teaches": "No future, minus infinity and softmax, the 2,048-slot band, why training and live agree",
    "status": "done",
    "seconds": 392.4,
    "video": "videos/4.7.07-the-causal-band-mask.mp4",
    "subs": "videos/4.7.07-the-causal-band-mask.vtt",
    "poster": "videos/thumbs/4.7.7.jpg"
   },
   {
    "id": "4.7.8",
    "title": "Position by ALiBi",
    "teaches": "Distance penalties, the four slopes and their horizons, against sinusoidal positions",
    "status": "done",
    "seconds": 386.6,
    "video": "videos/4.7.08-position-by-alibi.mp4",
    "subs": "videos/4.7.08-position-by-alibi.vtt",
    "poster": "videos/thumbs/4.7.8.jpg"
   },
   {
    "id": "4.7.9",
    "title": "Residuals and LayerNorm",
    "teaches": "The residual stream, LayerNorm built with numbers, pre-LN against post-LN",
    "status": "done",
    "seconds": 490.9,
    "video": "videos/4.7.09-residuals-and-layernorm.mp4",
    "subs": "videos/4.7.09-residuals-and-layernorm.vtt",
    "poster": "videos/thumbs/4.7.9.jpg"
   },
   {
    "id": "4.7.10",
    "title": "Feed-forward and dropout",
    "teaches": "96 to 384 to 96, GELU, dropout on the branches, the whole parameter count to 226,857",
    "status": "done",
    "seconds": 422.1,
    "video": "videos/4.7.10-feed-forward-and-dropout.mp4",
    "subs": "videos/4.7.10-feed-forward-and-dropout.vtt",
    "poster": "videos/thumbs/4.7.10.jpg"
   },
   {
    "id": "4.7.11",
    "title": "Out to nine drums",
    "teaches": "The final norm, the head, sigmoids, the worked slot's nine probabilities and what the decoder plays",
    "status": "done",
    "seconds": 454.9,
    "video": "videos/4.7.11-out-to-nine-drums.mp4",
    "subs": "videos/4.7.11-out-to-nine-drums.vtt",
    "poster": "videos/thumbs/4.7.11.jpg"
   },
   {
    "id": "4.7.12",
    "title": "Live: the cache",
    "teaches": "Keys and values on a shelf, one step, what it costs, 786,048 numbers",
    "status": "done",
    "seconds": 441.3,
    "video": "videos/4.7.12-live-the-cache.mp4",
    "subs": "videos/4.7.12-live-the-cache.vtt",
    "poster": "videos/thumbs/4.7.12.jpg"
   },
   {
    "id": "4.7.13",
    "title": "Training in chunks",
    "teaches": "Gradients reach 512, attention reaches 2,048, the detach, chunk mode equals slot mode",
    "status": "done",
    "seconds": 444.1,
    "video": "videos/4.7.13-training-in-chunks.mp4",
    "subs": "videos/4.7.13-training-in-chunks.vtt",
    "poster": "videos/thumbs/4.7.13.jpg"
   },
   {
    "id": "4.7.14",
    "title": "transformer.py, line by line",
    "teaches": "The whole file, read with everything above",
    "status": "done",
    "seconds": 659.7,
    "video": "videos/4.7.14-transformer-py-line-by-line.mp4",
    "subs": "videos/4.7.14-transformer-py-line-by-line.vtt",
    "poster": "videos/thumbs/4.7.14.jpg"
   },
   {
    "id": "4.7.15",
    "title": "Explain it yourself",
    "teaches": "The model in five minutes, then the questions an examiner will ask, with answers",
    "status": "done",
    "seconds": 835.1,
    "video": "videos/4.7.15-explain-it-yourself.mp4",
    "subs": "videos/4.7.15-explain-it-yourself.vtt",
    "poster": "videos/thumbs/4.7.15.jpg"
   },
   {
    "id": "4.8",
    "title": "Feedback and the silent drummer",
    "teaches": "Option C, teacher forcing against closed loop, exposure bias",
    "status": "done",
    "seconds": 555.8,
    "video": "videos/4.8-feedback-and-the-silent-drummer.mp4",
    "subs": "videos/4.8-feedback-and-the-silent-drummer.vtt",
    "poster": "videos/thumbs/4.8.jpg"
   },
   {
    "id": "4.9",
    "title": "The decoder",
    "teaches": "Probabilities to hits, rate-matched thresholds, floors",
    "status": "done",
    "seconds": 480.7,
    "video": "videos/4.9-the-decoder.mp4",
    "subs": "videos/4.9-the-decoder.vtt",
    "poster": "videos/thumbs/4.9.jpg"
   },
   {
    "id": "4.10",
    "title": "Comparing them fairly",
    "teaches": "Same songs, same budget, every epoch scored",
    "status": "done",
    "seconds": 444.2,
    "video": "videos/4.10-comparing-them-fairly.mp4",
    "subs": "videos/4.10-comparing-them-fairly.vtt",
    "poster": "videos/thumbs/4.10.jpg"
   }
  ],
  "planned": []
 },
 {
  "n": "5",
  "name": "The battery",
  "lessons": [
   {
    "id": "5.1",
    "title": "Measure first, and test the measure",
    "teaches": "Two axes never averaged, controls, adversaries",
    "status": "done",
    "seconds": 319.1,
    "video": "videos/5.1-measure-first.mp4",
    "subs": "videos/5.1-measure-first.vtt",
    "poster": "videos/thumbs/5.1.jpg"
   },
   {
    "id": "5.2",
    "title": "Nine numbers for a window",
    "teaches": "Density, backbeat, weak-to-strong share, syncopation",
    "status": "done",
    "seconds": 434.4,
    "video": "videos/5.2-window-features.mp4",
    "subs": "videos/5.2-window-features.vtt",
    "poster": "videos/thumbs/5.2.jpg"
   },
   {
    "id": "5.3",
    "title": "Comparing two distributions",
    "teaches": "Histograms, kernel density, KL divergence, overlap area, spread ratio",
    "status": "done",
    "seconds": 529.1,
    "video": "videos/5.3-distributions.mp4",
    "subs": "videos/5.3-distributions.vtt",
    "poster": "videos/thumbs/5.3.jpg"
   },
   {
    "id": "5.4",
    "title": "Coincidence above chance",
    "teaches": "The hypergeometric, NOC, NOC as Cohen's kappa, why it was demoted",
    "status": "done",
    "seconds": 596.8,
    "video": "videos/5.4-noc.mp4",
    "subs": "videos/5.4-noc.vtt",
    "poster": "videos/thumbs/5.4.jpg"
   },
   {
    "id": "5.5",
    "title": "Following I: finding sections",
    "teaches": "Jaccard, the self-similarity matrix, Foote novelty, boundaries",
    "status": "done",
    "seconds": 538.6,
    "video": "videos/5.5-finding-sections.mp4",
    "subs": "videos/5.5-finding-sections.vtt",
    "poster": "videos/thumbs/5.5.jpg"
   },
   {
    "id": "5.6",
    "title": "Following II: follow and leak",
    "teaches": "delta, follow, leak, F, the adversaries, pattern line, lag one",
    "status": "done",
    "seconds": 611.9,
    "video": "videos/5.6-follow-and-leak.mp4",
    "subs": "videos/5.6-follow-and-leak.vtt",
    "poster": "videos/thumbs/5.6.jpg"
   },
   {
    "id": "5.7",
    "title": "Statistics for comparisons",
    "teaches": "Medians, paired Wilcoxon, effect size, bootstrap intervals",
    "status": "done",
    "seconds": 578.0,
    "video": "videos/5.7-statistics.mp4",
    "subs": "videos/5.7-statistics.vtt",
    "poster": "videos/thumbs/5.7.jpg"
   }
  ],
  "planned": []
 },
 {
  "n": "6",
  "name": "Results and listening",
  "lessons": [],
  "planned": [
   {
    "id": "6.1",
    "title": "The architecture run",
    "teaches": "LSTM, S4D and transformer, epoch by epoch, on the battery"
   },
   {
    "id": "6.2",
    "title": "The ear against the battery",
    "teaches": "Blind listening pilots and what they overturned"
   },
   {
    "id": "6.3",
    "title": "The genre drummers",
    "teaches": "XMIDI Rock, Jazz and Country"
   },
   {
    "id": "6.4",
    "title": "The bass stage",
    "teaches": "Rule bass against learned bass, relative and absolute pitch"
   }
  ]
 },
 {
  "n": "7",
  "name": "The team's hardware",
  "lessons": [],
  "planned": [
   {
    "id": "7.1",
    "title": "The hexaphonic pickup",
    "teaches": "One coil per string, crosstalk"
   },
   {
    "id": "7.2",
    "title": "Onset detection on the FPGA",
    "teaches": "Frame energy against a threshold"
   },
   {
    "id": "7.3",
    "title": "YIN pitch detection",
    "teaches": "The difference function, why low notes are slow"
   },
   {
    "id": "7.4",
    "title": "Packets and the gigabit puzzle",
    "teaches": "GATE-2, UDP, the clock setting"
   }
  ]
 }
];
