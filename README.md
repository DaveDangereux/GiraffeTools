# Giraffe Tools - Building Emotional Literacy

A simple tool for selecting and collating words to describe immediate felt
experience in compassionate ways.

A live online version can be found [here](https://www.dave-jordan.dev).

## Screenshots
![Light Mode](https://github.com/DaveDangereux/GiraffeTools/assets/61416292/6daeca78-3eb8-4a3a-b864-479d089adb8a)
![Dark Mode](https://github.com/DaveDangereux/GiraffeTools/assets/61416292/1b72fd61-9a83-40f6-a311-59975bd138d3)
![Feelings - Met Needs](https://github.com/DaveDangereux/GiraffeTools/assets/61416292/69563ee9-c8f4-46b1-a443-d80393167b89)
![Feelings - Unmet Needs](https://github.com/DaveDangereux/GiraffeTools/assets/61416292/383074c2-cb2e-40b6-aed6-cc37c059b458)

*Screenshots of mobile view demonstrating light and dark themes and word filtering.*

## Why a Literacy Tool?

This project was inspired by Nonviolent Communication, a communication model and
body of teachings that aims to promote a compassionate quality of relationship
between people, therefore increasing the likelihood that a user's needs (and
the needs of others) will be met.

For an excellent high-level overview of the Nonviolent Communication Model, see
the Overview section of [this Wikipedia
article](https://en.wikipedia.org/wiki/Nonviolent_Communication#Overview).

The tool is based on the **Feelings and Needs Inventory** word-lists from the
Centre for Nonviolent Communication's [website](https://www.cnvc.org/).

The inventory includes three lists of words:

- Feelings of Met Needs
- Feelings of Unmet Needs
- Needs

In the NVC communication model, **Feelings** and **Needs** represent two of four
elements of language that the model encourages users to direct their attention
towards (the other two being **Observations** and **Requests**).

### Feelings

NVC defines **Feelings** as referring exclusively to internal sensations that
provide information about the state of our **Needs**. The model
differentiates them from words that imply evaluation of somebody else's
intentions.

#### Examples of Feelings:
```
appreciative, perplexed, nervous, wistful, encouraged
```

#### Examples of pseudo-feelings (implying evaluation of intent):
```
ignored, judged, deceived, betrayed, disrespected
```

NVC suggests that using language that can be readily perceived as implying
judgement of the person you are communicating with can interfere with their
capacity to empathically connect with you.

### Needs

Similarly, a **Need** is defined as an exclusively internal condition that a
human action will be in service of, and that is common to all humans. These are
also differentiated from **Strategies**, which are methods for meeting human
needs. As Needs are common to all humans, they are likely to be easier to
empathise with than Strategies.

#### Examples of Needs:

```
acceptance, rest, security, joy, growth
```

The range of possible strategies is vast, but by way of example you might think
of a sandwich as a way to meet the need for nourishment. Nobody *needs* a
sandwich, but everyone needs nourishment and there may be an immediate
preference to meet that need via a sandwich. NVC suggests that only knowing what
you *want* (a preference for a particular Strategy) can make the world a scarce
place when those strategies are either not available or are in conflict with the
preferences of others.

NVC encourages developing *Needs Consciousness*, or an awareness of what one is
needing in the present moment. Having clarity about Needs also introduces a
greater range of potential strategies to choose from and increases the
likelihood that mutually-beneficial strategies can be discovered.


## Using the Tool

The aim of the tool is to develop the skill of connecting compassionate language
to internal sensations. Most, if not all, of the words in this tool will be
familiar to those with English as a first language (internationalisation is
presently beyond the scope of this project, but is a future goal when time
permits). Although these words are all quite common, it may not be habitual or
easy to employ these words when describing felt experience to another human
being, or even generally to oneself.

The intended usage is to scan through the list and select words that describe
your experience. Although the lists may seem lengthy, it may be surprising how
quick the process can be when the intention is to describe *immediate*
experience, with users often describing the words as 'standing out', 'feeling 
right' or otherwise being obvious when suggested.

Feelings can be toggled `on` or `off` and Needs can be toggled through
`off`, `met` (green) and `unmet` (red) states.

Once words have been selected, the view can be changed to display only
`selected` words, words describing `met` needs and words describing
`unmet` needs. The selection can also be `reset` and a dark mode is included for
late-night empathic introspection.


## Installation and Running the Local Development Server

You can install dependencies and run this project's local development server
using [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/) or
[yarn](https://yarnpkg.com/). The project was built with `pnpm` and this is the
recommended tool to use.

Alternatively, as previously mentioned, a live preview can be found
[here](dave-jordan.dev).

### Using pnpm

```bash
pnpm install
pnpm run dev
```

### Using npm

```bash
npm install
npm run dev
```

### Using yarn

```bash
yarn
yarn run dev
```

## Author
[David Jordan](https://github.com/davedangereux)
