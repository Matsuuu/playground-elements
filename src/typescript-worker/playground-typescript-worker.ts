/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {expose} from 'comlink';
import {build} from './build.js';
import type {WorkerAPI} from '../shared/worker-api.js';
import { getCompletions } from './completion.js';

const workerAPI: WorkerAPI = {
  compileProject: build,
  getCompletions: getCompletions
};
expose(workerAPI);
