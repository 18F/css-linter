# PostCSS as a styleguide linter

Just playing around with [`postcss`](https://npm.im/postcss) as a styleguide linter per [frontend/#19](https://github.com/18F/frontend/issues/19).

## Installation

0. `git clone git@github.com:jeremiak/postcss-style-linter.git && cd postcss-style-linter`
0. `npm install`
0. `npm start`

This should run through all of the very lightweight plugins in `./plugins.js` and run them against `ugly.css` to generate `pretty.css`

The only dependency is `postcss` and the plugin architecture of the tool would provide a really extensible framework for the CSS build toolchain.

Plus, it has sourcemaps!

## Open Source Policy

### 18F Team Guidance

For 18F team members, we have guidance on how 18F puts this policy into practice, and how we handle the narrow situations where we may delay or withhold the release of source code.

**[18F's open source team practices.](https://github.com/18F/open-source-policy/blob/master/practice.md)**

### Credits

This policy was originally forked from the [Consumer Financial Protection Bureau's policy](https://github.com/cfpb/source-code-policy). Thanks also to [@benbalter](https://github.com/benbalter) for his [insights regarding CFPB's initial policy](http://ben.balter.com/2012/04/10/whats-missing-from-cfpbs-awesome-new-source-code-policy/).


### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
