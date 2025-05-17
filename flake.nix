{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    devenv.url = "github:cachix/devenv";
  };

  outputs = inputs @ {
    flake-parts,
    nixpkgs,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = nixpkgs.lib.systems.flakeExposed;

      imports = [
        inputs.devenv.flakeModule
      ];

      perSystem = {pkgs, ...}: {
        devenv.shells.default = {
          # Language
          languages = {
            javascript = {
              enable = true;
              # directory = "./frontend";

              pnpm.enable = true;
              pnpm.install.enable = true;
            };
          };

          env = {
            PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING = 1;
            PRISMA_MIGRATION_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine";
            PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine";
            PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node";
            PRISMA_INTROSPECTION_ENGINE_BINARY="${pkgs.prisma-engines}/bin/introspection-engine";
            PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt";
          };
        };
      };
    };
}
