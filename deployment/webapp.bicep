param webAppName string = 'Node-${uniqueString(resourceGroup().name, utcNow('F'))}'
param location string = resourceGroup().location

var alwaysOn = false
var sku = 'P1v2'
var skuCode = 'PremiumV2'
var skuSize = 'P1v2'
var skuFamily = 'Pv2'
var numberOfWorkers = 1
var linuxFxVersion = 'NODE|14-lts'
var hostingPlanName_var = 'hpn-${resourceGroup().name}'


resource webapp 'Microsoft.Web/sites@2020-12-01' = {
  name: webAppName
  location: location
  kind: 'app,linux'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: hostingPlan.id
    clientAffinityEnabled: false
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      alwaysOn: alwaysOn
      numberOfWorkers: numberOfWorkers
    }
  }
}

resource hostingPlan 'Microsoft.Web/serverfarms@2020-12-01' = {
  name: hostingPlanName_var
  location: location
  kind: 'linux'
  sku: {
    name: sku
    tier: skuCode
    size: skuSize
    family: skuFamily
    capacity: numberOfWorkers
  }
  properties: {
    reserved:true
  }
}
