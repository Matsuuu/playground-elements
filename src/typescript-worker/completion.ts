/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import type {
  CodeCompletionOptions,
  WorkerConfig,
} from '../shared/worker-api.js';
import {getWorkerContext} from './worker-context.js';

export const getCompletions = async (
  config: WorkerConfig,
  completionOptions: CodeCompletionOptions,
  emit: (completions: any) => void
): Promise<void> => {
  const workerContext = getWorkerContext(config);
  const languageService = workerContext.languageServiceContext.service;
  console.log(emit);

  languageService.getCompletionsAtPosition(
    completionOptions.fileName,
    completionOptions.position,
    {}
  );
};
