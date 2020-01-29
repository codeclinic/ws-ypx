/**
 * Created by user on 2020/1/29.
 */

import handleOptions from '../lib/handleOptions';
import createTemporaryDirectory, { newTemporary } from '../lib/createTemporaryDirectory';
import { pathExistsSync } from 'fs-extra';
import crossSpawnExtra, { SpawnOptions } from 'cross-spawn-extra';
import { crossSpawnOutput } from '../lib/util';
import initTemporaryPackage from '../lib/initTemporaryPackage';
import { join, normalize } from 'path';

jest.setTimeout(60 * 60 * 1000);

const local_bin = join(__dirname, '..', 'bin', 'ypx.js');

function runLocalBin(argv: string[], options: SpawnOptions)
{
	return crossSpawnExtra('node', [
		local_bin,
		...argv,
	], options)
}

test(`test install`, async () =>
{
	let actual = await newTemporary();

	let cwd = actual.tmpDir;

	console.log(`target => `, cwd);

	await runLocalBin([
		'--debug-bin'
	], {
		cwd,
		stripAnsi: true,
	})
		.then(cp => {

			let output = crossSpawnOutput(cp.output);

			//console.dir(cp);

			// @ts-ignore
			console.log(`cp.exitCode =>`, cp.exitCode);
			// @ts-ignore
			expect(cp.exitCode).not.toEqual(1);

			console.log(`output =>`, output);
			expect(normalize(output)).toStrictEqual(normalize(local_bin));

		})
	;

	await actual.remove();

});

test(`cowsay`, async () =>
{
	let actual = await newTemporary();
	await initTemporaryPackage(actual.tmpDir);

	let cwd = actual.tmpDir;

	console.log(`target => `, cwd);

	await runLocalBin([
		'cowsay',
		'-q',
		'--ignore-existing',
		'--',
		'test'
	], {
		cwd,
		stripAnsi: true,
	})
		.then(cp => {

			let output = crossSpawnOutput(cp.output);

			console.log(output);

			expect(output).toContain('< test >');
			expect(output).toContain('(oo)\\_______');

		})
	;

	await actual.remove();

});

test(`command not found: speedtest`, async () =>
{
	let actual = await newTemporary();

	let cwd = actual.tmpDir;

	console.log(`target => `, cwd);

	await runLocalBin([
		'speedtest',
		'-q',
	], {
		cwd,
		stripAnsi: true,
	})
		.then(cp => {

			let output = crossSpawnOutput(cp.output);

			console.log(output);

			// @ts-ignore
			expect(cp.exitCode).toEqual(1);

			expect(output).toContain('command not found');

		})
		.finally(() => {
			return actual.remove()
		})
	;

	await actual.remove();

});
