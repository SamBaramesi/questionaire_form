<template>
  <div class="max-w-sm w-10/12 mx-auto bg-warning rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-contain md:h-full md:w-48" src="../assets/logo.png"
          alt="Modern building architecture" />
      </div>

      <div v-if="welcomeMSG">
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Welcome</div>
          <p class="block mt-1 text-lg leading-tight font-medium text-black">
            Beantwoord de volgende vragen en bekijk je resultaat aan het eind.
          </p>
          <button class="bg-primary hover:bg-secondary text-white text-lg font-bold px-3 py-3 rounded-lg mt-3"
            @click="welcomeMSG = false">
            Verder gaan
          </button>
        </div>
      </div>

      <div v-else>
        <div v-if="currentQuestion">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Vraag {{ currentQuestion.id }}
            </div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black">
              {{ currentQuestion.content }}
            </p>
            <div>
              <div class="flex items-center mb-4">
                <select id="answer" class="border border-gray-300 rounded-md px-3 py-2 w-40"
                  v-model="currentQuestion.answer">
                  <option value=1>Kan ik niet</option>
                  <option value=2>ken het maar nooit gebruikt</option>
                  <option value=3>kan het toepassen</option>
                  <option value=4>kan het toepassen in andere situaties</option>
                  <option value=5>kan een ander uitleggen wat het is en toepassen</option>
                </select>
              </div>
              <button class="bg-primary hover:bg-secondary text-white text-lg font-bold px-3 py-2 rounded-lg"
                @click="nextQuestion">
                Volgende Vraag
              </button>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="max-w-md mx-auto bg-white shadow-md  p-6">
            <h2 class="text-xl font-semibold mb-4"> Uw Score is: {{ this.totalSum }}</h2>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "FlashCard",
  data() {
    return {
      welcomeMSG: true,
      questions: [
        {
          id: 1,
          content: "Periodiek planning taken en werkzaamheden maken (explo) of jongeren hierover adviseren (rover).",
          answered: false,
          answer: null,
        },
        {
          id: 2,
          content: "Bevorderen samenwerking leidingteam, zowel voor jeugdleden als voor leiding onderling.",
          answered: false,
          answer: null,
        },
        {
          id: 3,
          content: "Bevorderen taakverdeling leidingteam, zowel voor jeugdleden als voor leiding onderling.",
          answered: false,
          answer: null,
        },
        {
          id: 4,
          content: "Bevorderen gezamenlijke verantwoordelijkheid leidingteam, zowel voor jeugdleden als voor leiding onderling.",
          answered: false,
          answer: null,
        },
        {
          id: 5,
          content: "Tonen daadkracht ten aanzien van veiligheid en optreden indien nodig.",
          answered: false,
          answer: null,
        },
        {
          id: 6,
          content: "Leiderschap tonen bij crisis",
          answered: false,
          answer: null,
        },
        {
          id: 7,
          content: "Aanpassen eigen houding situatie van het moment.",
          answered: false,
          answer: null,
        },
        {
          id: 8,
          content: "Aanpassen eigen gedrag situatie van het moment.",
          answered: false,
          answer: null,
        },
        {
          id: 9,
          content: "Juist afhandelen ongeval richting jeugdlid en ouders, in samenwerking met groepsbestuur.",
          answered: false,
          answer: null,
        }
      ],
      currentQuestionIndex: 0,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    totalSum() {
      return this.questions.reduce((sum, question) => sum + Number(question.answer), 0)
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestionIndex === 8) {
        this.currentQuestionIndex = false;
      }
      else {
        this.currentQuestion.answered = true;
        this.currentQuestionIndex++;
      }
    },
  },
};
</script>