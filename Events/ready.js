module.exports = {
    event: "ready",
    async receive() {
        console.log("Bot is now on!");
        this.user.setActivity("Testing phase! V0.0.1");
    },
};
