export const fetchTodos = (callback) => {
    $.ajax({
        method: 'GET',
        url: '/api/todos'
      }).then(
        callback
      );
};