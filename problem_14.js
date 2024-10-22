let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence() {
        if (this.subject && this.verb && this.object) {
            return this.subject + " " + this.verb + " " + this.object;
        }
        else {
            return "Incomplete sentence";
        }
    },

    updateProperty(property, value) {
        if (property in this) {
            if (value) {
                this[property] = value;
            }
            else {
                return "Incomplete sentence";
            }
        }
        else {
            return "Invalid property";
        }
    }

}

console.log(sentenceBuilder.buildSentence());

sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence());

sentenceBuilder.updateProperty("subject", "The cat is");
console.log(sentenceBuilder.buildSentence());

console.log(sentenceBuilder.updateProperty("mood", "happy"));

console.log(sentenceBuilder.updateProperty("verb", ""));