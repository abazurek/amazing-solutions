function delay(duration: number) {
  return function (data: object) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(data);
      }, duration);
    });
  };
}

export { delay };
