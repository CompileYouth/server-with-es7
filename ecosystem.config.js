module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "SERVER",
      max_memory_restart: "10M",
      instances: 2,
      script    : "index.js",
      env: {
        "NODE_ENV": "development"
      },
      exec_mode: "fork",
      error_file: "./output/err.log",
      out_file: "./output/info.log",
      exec_interpreter: "./node_modules/.bin/babel-node",
      merge_logs: true
    },

    // Second application
    // {
    //   name      : "INS2",
    //   max_memory_restart: "10M",
    //   instances: 1,
    //   script    : "index.js",
    //   env: {
    //     "NODE_ENV": "development",
    //     "PORT": 8081
    //   },
    //   exec_mode: "fork",
    //   error_file: "./output/err.log",
    //   out_file: "./output/info.log",
    //   exec_interpreter: "./node_modules/.bin/babel-node"
    // }
  ]
}
