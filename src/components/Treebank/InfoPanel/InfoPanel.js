import React, { Fragment } from 'react';

import { deconstructPostag } from '../config';

import TreebankContext from '../treebank-context';

const renderPostag = (deconstructedPostag) => (
  <dl>
    {deconstructedPostag.map(([name, value]) => (
      <Fragment key={name}>
        <dt>{name}</dt>
        <dd>{value}</dd>
      </Fragment>
    ))}
  </dl>
);

const InfoPanel = () => (
  <TreebankContext.Consumer>
    {({ active, config }) => {
      if (active) {
        const { $: { postag } } = active;

        return (
          <div>
            {renderPostag(deconstructPostag(config, postag))}
          </div>
        );
      }

      return (
        <div />
      );
    }}
  </TreebankContext.Consumer>
);

export default InfoPanel;
