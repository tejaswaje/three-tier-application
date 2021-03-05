resource "kubernetes_service" "backend_svc" {
  metadata {
    name = var.backend_name
  }
  spec {
    port {
      port        = 5000
      target_port = 5000
    }
    selector = {
      "app"  = "three-tier"
      "tier" = "backend"
    }
  }
}
