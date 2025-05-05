+++
title = "Better than Adventure! 7.3_02 is now available!"
date = 2025-05-05T19:19:00+01:00
draft = false
tags = ["News", "Update"]
description = 'A Colorful Patch'
type = "article"
[params]
    authors = ["Jonk", "Mak"]
+++

G'day!

Today we're releasing version v7.3_02 of Better than Adventure!, which includes a metric ton of bug fixes, significant improvements to latency in multiplayer, and most importantly, some minor new changes and additions!

### Features

-   Added dyed wooden pressure plates, signs, and buttons from 7.4
-   Spike changes:
    -   Now deal a continuous 2 damage every half a second (1 damage = half a heart)
    -   Severely limits movement in all directions
    -   When the player is crouching, spikes only deal 1 damage every second, and horizontal movement is much quicker
    -   Fall damage is much more consistent on spikes and you will receive to-be-expected levels of fall damage
    -   Spikes can now be placed without a block below them
    -   The spike hitbox has been changed to accurately reflect its size
-   Mushroom changes:
    -   Can now bonemeal mushrooms to spawn mushrooms around it
    -   Can now place mushrooms on any block surface
    -   Increased mushroom spread chance by 75%
-   Recipe changes:
    -   Label recipe is now shapeless
    -   Bookshelf recipe now yields 4 instead of 1
    -   Piston decimating Sandstone now yields sand
-   Dead bushes can now be placed in more locations
-   Made plants plant-able on all mossy block
-   Made all carved pumpkins fully rotatable
-   Added dimension sub command to /tp
-   Wands now set name color when named with a color
-   New textures for retro bookshelves and retro sand
-   Creepers now properly pathfind under trapdoors
-   Removed incoming packet throughput limit on client
-   Bonemealing algae now causes it to spread
-   Made lamp inversion only occur when player right clicks with an empty hand
-   Improved chest logging
-   Implemented Gungun's improved packet processing mod
-   Adjusted portal bounds to reflect build limit rather then worldgen limit
-   Adjusted developer drop items to use UUIDs
-   Made Return key checks also accept numpad enter
-   Easy bridging is no longer able to do interactions other then placement
-   Added missing EntityDispatch for egg projectiles
-   Explosions now center on the exploded object
-   Baskets now actually, finally, propagate redstone updates properly

### Bug Fixes

-   Mobs no longer retain the color of the last dyed label given to them
-   Fixed Z axis on seed viewer being inverted
-   Painting doors no longer deletes half of it
-   Fixed potential null pointer exception with sign rendering
-   Fixed diamond ore retro texture not applying in retro worlds
-   Wrapped sound engine methods in try catch blocks
-   Brought double chest texture fix from next into master
-   Fixed paintings not dropping themselves when punched
-   Fixed falling block bounding box becoming incorrect on reload
-   Fixed left clicking blocks sometimes running their left click actions twice
-   Painted door item now actually runs the onBlockPlaced code
-   When doors are powered on placement it now plays the door opening sound effect
-   Fixed duplicate option button strings becoming desynced on option value change
-   Made serverside modded sound registration easier
-   Fixed statistic packet holding onto pooled namespace id objects
-   Fixed issue where at certain angles you can spam hit the top and bottom blocks of the door.
-   Fixed falling block bounds becoming invalid on reload
-   Made empty furnaces not spam description packets
-   Fixed possible null pointer exception on flag edit GUI
-   Fixed corner fences collision boxes not matching their model
-   Fixed mobGriefing gamerule also disabling explosion particle effects
-   Fixed pressureplates and motion sensors detecting spectators
-   Portals no longer teleport players while nocliping
-   Fixed divide-by-zero crash on the server selection screen
-   Fixed double fling bug in multiplayer
-   Fixed creepers not being able to pathfind under certain trapdoors
-   Fixed greedy baskets

## Download

We still recommend against using the automatic installer for the time being. Please install the MultiMC instance manually [here](/downloads). Instructions on installing can be found below.

Still working on a new updater that we will release very soon!

## Installation

To manually install with MultiMC/Prism just drag and drop the downloaded ZIP file into your launcher. More details can be found [here](https://www.betterthanadventure.net/installation-guide) under _"Installation: MultiMC/Prism Instance"_.

If you need any assistance in installing or have a bug to report, then please submit a ticket to our new [issue tracker](https://bugs.betterthanadventure.net/).

Have a nice day! :-)

-Majonk
