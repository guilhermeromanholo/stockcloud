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
        };
      };
    };
}
