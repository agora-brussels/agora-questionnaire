# Agora Questionnaire

This is the source code for a questionnaire website made by the political citizen collective [Agora.Brussels](https://agora.brussels/).

The questionnaire has two potential audiences:

- **Citizens**, invited to participate in an assembly or participatory process for which they were recently drawn by lot, who are hesitating to participate. For these citizens, the questionnaire helps them question the process setup through 15 questions so they can better decide for themselves.
- **Organisers** of a future assembly or participatory process. The questionnaire helps future organisers to ask important questions on their own setup, in order to make it more welcoming and effective.

Between 2019 and 2024, Agora organised the [Brussels Citizen Assembly](https://www.assemblee.brussels/?lang=en), the first Brussels political institution made up entirely of citizens drawn by lot. The lessons learned during the preparation, living and evaluation of 4 assembly cycles, by Agora and the participants, form the content of this tool.

This tool is accessible at [https://questionnaire.agora.brussels](https://questionnaire.agora.brussels/) from 2024 on (until the domain name expires) and will be accessible at [agora-brussel.github.io/agora-questionnaire](https://agora-brussels.github.io/agora-questionnaire) afterwards.

## Reuse and license

This tool is shared hoping to inspire future participants and organisations. It is published under the [CC CC BY-ND 4.0 license](https://creativecommons.org/licenses/by-nd/4.0/).

The data used for the questions is available in a structured YAML format [here](./src/lib/content).

## Developing and building this website yourself

You can build this website yourself, e.g. to host it somewhere, or reuse the content (within the scope of the license).

This website is built with SvelteKit. To develop or build locally, fork the repository and follow the instructions below.

### Developing

Install the dependencies with `npm install` and start a development server using `npm run dev -- --open`. You can now make modifications.

### Building

To create a production version of your app, run `npm run build`

You can preview the production build with `npm run preview`.

To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
