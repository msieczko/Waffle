export interface Config {
  /** Location of the project sources e.g. ./contracts */
  sourceDirectory: string;
  /** Location of the compilation artifacts e.g. ./dist */
  outputDirectory: string;
  /** Location of the dependencies e.g. ./node_modules */
  nodeModulesDirectory: string;

  /**
   * Compiler type:
   * - native - uses local installation of solc
   * - dockerized-solc - uses solc from a docker image
   * - solcjs - uses solc from the solcjs npm package
   */
  compilerType: 'native' | 'dockerized-solc' | 'solcjs';
  /** Version of the solidity compiler e.g. "0.5.1" or "default" */
  compilerVersion: string;
  /**
   * Additional allowed paths for the compiler.
   * Only used for native compiler type.
   */
  compilerAllowedPaths: string[];
  /** Options passed to the compiler */
  compilerOptions: object;

  /** Include the humanReadableAbi format */
  outputHumanReadableAbi: boolean;
  /**
   * What files should be outputted
   * - multiple - single file for each contract
   * - combined - single file for all contracts
   * - all - both of the above
   */
  outputType: 'multiple' | 'combined' | 'all';
}

export interface LegacyConfig {
  sourcesPath?: string;
  targetPath?: string;
  npmPath?: string;
  compiler?: 'native' | 'dockerized-solc' | 'solcjs';
  'docker-tag'?: string;
  solcVersion?: string;
  legacyOutput?: string;
  allowedPaths?: string[];
  compilerOptions?: Record<string, any>;
  outputType?: 'multiple' | 'combined' | 'all';
  outputHumanReadableAbi?: boolean;
  ganacheOptions?: Record<string, any>;
}

export type InputConfig = Partial<Config> & LegacyConfig
