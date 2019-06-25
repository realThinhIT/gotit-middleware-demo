export default ({ dispatch, getState }) => next => async action => {
    const { type, promise, ...rest } = action;

    // If promise isn't defined, pass the middleware.
    if (!promise) {
      return next(action);
    }

    // define corresponding actions
    const successAction = `${type}_SUCCESS`;
    const failedAction = `${type}_FAILED`;

    try {
      // Try to exec the promise, if it is resolved, dispatch success action.
      const result = await promise();

      next({
        type: successAction,
        payload: result,
        ...rest
      });

      return {
        success: true,
        res: result
      }
    } catch (e) {
      // If it is rejected, dispatch failed action.
      next({
        type: failedAction,
        payload: e,
        ...rest
      });

      return {
        success: false,
        error: e
      }
    }
};