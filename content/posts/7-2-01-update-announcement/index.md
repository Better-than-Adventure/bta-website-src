+++
title = "Better than Adventure! 7.2_01 is now available!"
date = 2024-08-04T16:00:00+01:00
draft = false
tags = ["News", "Update"]
description = 'Fixes for those pesky Intel users and more!'
type = "article"
[params]
    authors = ["Mak"]
+++

Happy sunday!

As with every release, sometimes there are bugs we miss that need to be squashed. Therefore, here is 7.2_01 to fix a couple of pressing issues in the latest release. Namely, this release includes a quick-fix for intel GPU users to disable lightmaps (you can re-enable them under debug settings if you really want to), as they are causing issues with textures for certain players.

Full list of changes:

-   Added error printing on exceptions for texture loading
-   Temporarily disable lightmaps for intel GPUs as a quick-fix for a bug with textures present for intel users.
-   Jukebox's "Now Playing" message now accounts for screen padding value

-   Steve has relearned how to handle shallow water
-   Fixed entities sometimes deleting themselves from worlds
-   Fixed redstone dust texture corruption
-   Better error handling with corrupted nbt data
-   Updated error message handling in NetClientHandler
-   Fixed item lava bouncing
-   Fixed crash when leaving a multiplayer world
-   Fixed rain and snow causing mobs to extinguish and relight constantly in the day
-   Fixed a rare block break animation crash
-   Fixed wet farmland not dropping mud
-   Texture pack button no longer bugs out when options is closed
-   Sky now moves smoothly again in multiplayer
-   Some refactors and fixes to fishing
-   Fixed bonemeal not being consumed when used on farmland
-   Biome Finder window no longer closes the main game's window
-   Explosions should no longer be able to cause a concurrent modification exception when occurring
-   BiomeFinder and DataDumper utilities now use the correct minecraft directory

## Download

Our recommended download method is using the **BTA Updater**, a utility instance for MultiMC and Prism Launcher which, when run, will automatically install Better than Adventure! for you in an instance called "Better than Adventure! (Managed)".

You can find the link for this utility [here](/downloads), as well as a more traditional MultiMC instance and client and server JAR links.

## Installation

For those of you who already have the BTA Updater installed, you can simply run it and it will update your "Better than Adventure! (Managed)" instance to the latest version automatically, preserving all your worlds and settings as-is.

If you need any assistance in installing or have a bug to report, then please visit our [Discord](https://www.betterthanadventure.net/discord).

Enjoy! :)

-Majonk
