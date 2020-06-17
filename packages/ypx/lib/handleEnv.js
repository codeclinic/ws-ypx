Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleEnv = handleEnv;
exports.default = void 0;

var _pathEnv = require("path-env");

function handleEnv(argv, runtime, _env) {
  let paths = (0, _pathEnv.pathEnv)(_env || runtime.env || process.env).path.append([runtime.tmpDir]);
  let env = paths.get.env();
  env.path = env.Path = env.PATH = paths.path.get.string();
  return env;
}

var _default = handleEnv;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZUVudi50cyJdLCJuYW1lcyI6WyJoYW5kbGVFbnYiLCJhcmd2IiwicnVudGltZSIsIl9lbnYiLCJwYXRocyIsImVudiIsInByb2Nlc3MiLCJwYXRoIiwiYXBwZW5kIiwidG1wRGlyIiwiZ2V0IiwiUGF0aCIsIlBBVEgiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBOztBQUdPLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXdDQyxPQUF4QyxFQUFnRUMsSUFBaEUsRUFDUDtBQUNDLE1BQUlDLEtBQUssR0FBRyxzQkFBUUQsSUFBSSxJQUFJRCxPQUFPLENBQUNHLEdBQWhCLElBQXVCQyxPQUFPLENBQUNELEdBQXZDLEVBQ1ZFLElBRFUsQ0FDTEMsTUFESyxDQUNFLENBQUNOLE9BQU8sQ0FBQ08sTUFBVCxDQURGLENBQVo7QUFJQSxNQUFJSixHQUFHLEdBQUdELEtBQUssQ0FBQ00sR0FBTixDQUFVTCxHQUFWLEVBQVY7QUFHQUEsRUFBQUEsR0FBRyxDQUFDRSxJQUFKLEdBQVdGLEdBQUcsQ0FBQ00sSUFBSixHQUFXTixHQUFHLENBQUNPLElBQUosR0FBV1IsS0FBSyxDQUFDRyxJQUFOLENBQVdHLEdBQVgsQ0FBZUcsTUFBZixFQUFqQztBQUVBLFNBQU9SLEdBQVA7QUFDQTs7ZUFFY0wsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMjAvMS8yOS5cbiAqL1xuXG5pbXBvcnQgeyBwYXRoRW52IH0gZnJvbSAncGF0aC1lbnYnXG5pbXBvcnQgeyBJWVBYQXJndW1lbnRzLCBJUnVudGltZUNhY2hlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFbnYoYXJndjogSVlQWEFyZ3VtZW50cywgcnVudGltZTogSVJ1bnRpbWVDYWNoZSwgX2Vudj8pOiBJUnVudGltZUNhY2hlW1wiZW52XCJdXG57XG5cdGxldCBwYXRocyA9IHBhdGhFbnYoX2VudiB8fCBydW50aW1lLmVudiB8fCBwcm9jZXNzLmVudilcblx0XHQucGF0aC5hcHBlbmQoW3J1bnRpbWUudG1wRGlyXSlcblx0O1xuXG5cdGxldCBlbnYgPSBwYXRocy5nZXQuZW52KCk7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRlbnYucGF0aCA9IGVudi5QYXRoID0gZW52LlBBVEggPSBwYXRocy5wYXRoLmdldC5zdHJpbmcoKTtcblxuXHRyZXR1cm4gZW52IGFzIGFueVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVFbnZcbiJdfQ==