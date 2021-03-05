resource "kubernetes_service" "frontend_svc" {
  metadata {
    name = "three-tier-frontend-svc"
    labels = {
      app  = "three-tier"
      tier = "frontend"
    }
  }
  spec {
    port {
      port        = 5000
      target_port = 5000
    }
    selector = {
      "app"  = "three-tier"
      "tier" = "frontend"
    }
  }
}
