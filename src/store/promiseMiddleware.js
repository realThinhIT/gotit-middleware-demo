export default ({ dispatch, getState }) => next => async action => {
    const { type, promise, ...rest } = action;

    // If promise isn't defined, pass the middleware.
    if (!action.promise) {
      return next(action);
    }

    // define corresponding actions
    const successAction = `${type}_SUCCESS`;
    const failedAction = `${type}_FAILED`;

    try {
      // Try to exec the promise, if it is resolved, dispatch success action.
      const result = await promise();

      return next({
        type: successAction,
        payload: result,
        ...rest
      });
    } catch (e) {
      // If it is rejected, dispatch failed action.
      next({
        type: failedAction,
        payload: e,
        ...rest
      });
    }
};