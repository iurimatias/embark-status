**Requires Status 0.9.4+ and Embark 2.4.0+**

# Installation

```npm install embark-status --save```

# Configuring

Add this config in `embark.json`:

```Json
  "plugins": {
    "embark-status": {
      "deviceIp": "your-device-ip",
      "whisperIdentity": "dapp-test",
      "name": "MyDapp"
    }
  }
```

then ```embark run```
