provider "azurerm" {
  features {},

  subscription_id = "9ec77024-c339-482c-a901-b695e05a5ed6"
}

resource "azurerm_resource_group" "example" {
  name     = " JumpVM-RG-1576863"
  location = "East US"
}

resource "azurerm_storage_account" "example" {
  name                     = "storage1576863"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

output "storage_account_name" {
  value = azurerm_storage_account.example.name
}
