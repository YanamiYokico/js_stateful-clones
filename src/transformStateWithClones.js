'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(initialState, actions) {
  const stateHistory = [Object.assign({}, initialState)];

  actions.forEach((action) => {
    let currentState = Object.assign({}, stateHistory[stateHistory.length - 1]);

    switch (action.type) {
      case 'clear':
        currentState = {};
        break;

      case 'addProperties':
        Object.assign(currentState, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => {
          delete currentState[key];
        });
        break;

      default:
        break;
    }

    stateHistory.push(currentState);
  });

  return stateHistory;
}

module.exports = transformStateWithClones;
