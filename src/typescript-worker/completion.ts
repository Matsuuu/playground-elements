import { CompletionEntry } from "typescript";
import { ModuleImportMap } from "../shared/worker-api";
import { CachingCdn } from "./caching-cdn";
import { ImportMapResolver } from "./import-map-resolver";
import { getBuilder } from "./project-cache";


export const getCompletionInfo = (
    fileName: string,
    config: {
      importMap: ModuleImportMap;
      cdnBaseUrl?: string;
    },
    position: number,
    wordAtPosition: string
): CompletionEntry[] => {
  const moduleResolver = new ImportMapResolver(config.importMap);
  const cdn = new CachingCdn(config.cdnBaseUrl ?? 'https://unpkg.com/');
  const tsBuilder = getBuilder(cdn, moduleResolver);
  return tsBuilder.getCompletionInfo(fileName, position, wordAtPosition);
}
