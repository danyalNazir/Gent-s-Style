/*Instead of using try/catch in every async function, we'll be using this middleware function
which will take an async function, catch the error(if any) and pass it to next middlware*/
function errorHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports.errorHandler = errorHandler;
