const { spawn } = require("child_process");
exports.root = async (req, res) => {
  res.status(200).json({
    NAME: process.env.npm_package_name,
    DESCRIPTION: process.env.npm_package_description,
    VERSION: process.env.npm_package_version,
    AMBIENTE: process.env.NODE_ENV,
  });
};
exports.tsp = async (req, res) => {
  let { cities, iterations, algorithm } = req.body;

  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python3", [
    "/home/san/Documents/TSP/API/app/controllers/python/tsp.py",
    cities,
    iterations,
    algorithm,
  ]);

  // collect data from script
  python.stdout.on("data", function (data) {
    dataToSend = data;
  });

  python.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  // in close event we are sure that stream from child process is closed
  python.on("exit", (code) => {
    console.log(`child process exited with code ${code}, ${dataToSend}`);
    res.json(JSON.parse(dataToSend.toString()));
  });
};
