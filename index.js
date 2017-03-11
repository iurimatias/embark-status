var child = require('child_process');
var Status = require('status-dev-cli');

module.exports = function(embark) {
  var status = new Status({ip: embark.pluginConfig.deviceIp});

  var getDAppData = function() {
    return {
      "whisper-identity": (embark.pluginConfig.whisperIdentity || "dapp-test"),
      "dapp-url": "http://" + embark.config.webServerConfig.host + ":" + embark.config.webServerConfig.port + "/",
      "name": (embark.pluginConfig.name || "My DApp")
    };
  };

  embark.events.on("firstDeploymentDone", function() {
    status.switchNode("http://" + embark.config.blockchainConfig.rpcHost + ":" + embark.config.blockchainConfig.rpcPort);

    embark.logger.info("Adding DApp to Status");
    status.addDapp(getDAppData(), function(err, result) {
      if(err) {
        embark.logger.error("Error adding DApp to Status");
      } else {
        embark.logger.info("DApp added to Status");
      }
    });
  });


  // when the dapp is regenerated
  embark.events.on("outputDone", function() {
    status.refreshDapp(getDAppData());
  });
};
