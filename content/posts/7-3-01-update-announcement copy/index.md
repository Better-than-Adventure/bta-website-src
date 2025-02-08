+++
title = "Better than Adventure! 7.3_01 is now available!"
date = 2024-08-04T16:00:00+01:00
draft = false
tags = ["News", "Update"]
description = 'The long awaited brick slab and stairs update.'
type = "article"
[params]
    authors = ["Mak"]
+++

Hello!

A new patch for version 7.3 is out now to fix a few outstanding issues. It also adds new stairs and slabs for various brick blocks, and a couple minor tweaks to existing features.

Enjoy!

Full list of changes:

-   Added new slab and stair blocks:
    -   Lapis bricks
    -   Iron bricks
    -   Gold bricks
    -   Steel bricks
-   Empty paintbrushes now render with empty durability
-   Paintbrushes now return to uncolored state when fully used
-   Player nicknames can no longer have spaces
-   /whois now suggests nicknames instead of usernames
-   Shift right click now decrements the pitch on noteblocks
-   Added molten pumice recipe
-   Wet sponges now dry when placed adjacent to lava or igneous netherrack
-   Added missing door undyeing recipe
-   Added easy bridge keybind
-   Made painted doors valid furnace fuel
-   Changed light grey dye recipe to use grey dye and bonemeal, rather then grey dye and ink sacks
-   Made doubled up cobbled netherrack slabs burn forever
-   Re-enabled experimental MultiDraw Renderer (Click the bottom right corner of the main menu to go to the debug menu to find the option)
-   NBT Tag json serialization support
-   Updated brigadier to 1.0.2
-   Added metadata to item sorting parameters
-   Various optimizations

-   Fixed basket fill being able to render outside the bounds
-   Fixed show description prompt improperly showing up on crafting result slots
-   Blocks now register their first hit as a punch rather then being explicitly left clicked
-   Fixed open guidebook achievement not triggering on controller
-   Fixed controller item dragging with x producing broken behavior
-   Fixed slider element issues on controller
-   Fixed rail power not propagating up slopes
-   Fixed fire striker playing sounds twice in multiplayer
-   Created optimized map for stone to ore mappings
-   Added inverted lamp undyeing recipe
-   Made oak and cherry sapling texture more consistent with each other
-   Made glowstone blocks always drop 4 glowstone dust
-   Fixed snowlayers having incorrect hitbox height
-   Fixed painting uncolored chests causing them to dump their contents onto the ground
-   Fixed handcannon not applying fling like other explosions
-   Fixed subtitles not displaying when game muted
-   Set user provided strings to use utf16 in mp rather then utf8
-   Temporarily made wood and glass trapdoors not check for powersource removal
-   Fixed maxed render distance fog looking too bright
-   Made ghast fireball achievement only apply on hit mobs instead of any entity
-   Fixed held trommel creating ghost items
-   Various command bugfixes
-   Fixed enabling Vsync crashing linux
-   Fixed view jumping when exiting GUIs on linux
-   Fixed window icon image randomly corrupting
-   Fixed reversing flags not working it MP
-   Fixed map waypoints not working correctly on maps
-   Fixed raw iron and raw gold textures having translucent pixels
-   Made container sorting also sort in respect to color/metadata
-   Increased mp connection timeout from 30 seconds to 90
-   Changed ChunkProviderStatic's allocated chunk array size to match current max render distance
-   Fixed render distance slider not updating multidraw render's render area ingame
-   Fixed fog option not actually disabling most fog
-   Removed unneeded iterator to get sign's picture enum
-   Made unfueled furnaces not constantly check if they can smelt
-   Fixed mouse jump issue on linux
-   Untangled mob category interfaces
-   Fixed broken get monitor refresh rate method
-   Fixed flag editing being largely broken in MP
-   Fixed map waypoints not working correctly
-   Removed transparent pixels from raw iron and raw gold textures
-   Fixed z-fighting on painting frame
-   Fixed pickblock move item ignoring default hotbar
-   Fixed a minor piston bug

## Download

We still recommend against using the automatic installer for the time being. Please install the MultiMC instance manually [here](/downloads). Instructions on installing can be found below.

We're working on a new updater that we will release soon!

## Installation

To manually install with MultiMC/Prism just drag and drop the downloaded ZIP file into your launcher. More details can be found [here](https://www.betterthanadventure.net/installation-guide) under _"Installation: MultiMC/Prism Instance"_.

If you need any assistance in installing or have a bug to report, then please submit a ticket to our new [issue tracker](https://bugs.betterthanadventure.net/).

Have a nice day! :-)

-Majonk
