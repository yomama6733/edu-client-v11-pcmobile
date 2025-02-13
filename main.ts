// if you see this, Hi!
player.onChat("cx", function (num1) {
    player.teleport(pos(num1, 0, 0))
})
player.onChat("cy", function (num1) {
    player.teleport(pos(0, num1, 0))
})
player.onChat("help", function () {
    player.say("cx number - teleport on the x axis ")
    player.say("cy number - same as cx but on the y axis")
    player.say("cz number - same as cx but on the z axis")
    player.say("scaffold - places blocks under you")
    player.say("ss - stops scaffold")
    player.say("day - sets time to day")
    player.say("dia - gives you 10 diamonds")
    player.say("type help2 for next page")
})
player.onChat("scaffold", function () {
    if (Scaffoldhack == 1) {
        Scaffoldhack = 0
        player.say("Scaffold off")
    } else {
        Scaffoldhack = 1
        player.say("Scaffold on.")
    }
    while (Scaffoldhack == 1) {
        blocks.place(DIRT, pos(0, -1, 0))
    }
})
player.onChat("food", function () {
    player.say("Gave you 16 steak.")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    COOKED_BEEF,
    16
    )
})
player.onChat("deez", function () {
    player.say("nuts")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    POTATO,
    1
    )
})
player.onChat("cz", function (num1) {
    player.teleport(pos(0, 0, num1))
})
player.onChat("dia", function () {
    player.say("Gave you 10 diamonds.")
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND,
    10
    )
})
player.onChat("day", function () {
    player.say("Set time to day.")
    gameplay.timeSet(gameplay.time(DAY))
})
player.onChat("ss", function () {
    Scaffoldhack = 0
    player.say("Scaffold off.")
})
player.onChat("help2", function () {
    player.say("food - gives you 16 cooked beef")
    player.say("deez -  nuts")
})
let Scaffoldhack = 0
Scaffoldhack = 0
player.say("EDU CLIENT V1.1")
player.say("type help for a list of commands")
