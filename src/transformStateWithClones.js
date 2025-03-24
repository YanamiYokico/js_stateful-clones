'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(initialState, actions) {
  const stateHistory = [];
  let state = { ...initialState };

  actions.forEach((action) => {
    let newState;

    switch (action.type) {
      case 'clear':
        newState = {};
        break;

      case 'addProperties':
        newState = { ...state, ...action.extraData };
        break;

      case 'removeProperties':
        newState = { ...state };

        action.keysToRemove.forEach((key) => {
          delete newState[key];
        });
        break;
    }

    stateHistory.push(newState);
    state = newState;
  });

  return stateHistory;
}

module.exports = transformStateWithClones;
