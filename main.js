var vm = new Vue({
    el: '#app',
    data() {
        return {
            money: 1_999_222,
           currentCarStats:{},
           modal: false,
           cars:[
               {
                name: 'BMW M5 Competition',
                speed: 27, // максимальная скорость
                fuel: 80, // сколько вмещает литров бенза
                trunk: 150, // вес авто
                move: 50, // управляемость
                brake: 20, // торможение
                faster: 20, // ускорение
                price: 399.999,
                color: ''
               },
               {
                name: 'Albany Washington',
                speed: 167,
                fuel: 80,
                trunk: 150,
                move: 9,
                brake: 25,
                faster: 20,
                price: 399.999,
                color: ''
               },
               {
                name: 'Benefactor Schafter',
                speed: 300,
                fuel: 80,
                trunk: 150,
                move: 5,
                price: 399.999,
                brake: 90,
                faster: 20,
                color: ''
               },
               {
                name: 'Albany Washington',
                speed: 15,
                fuel: 80,
                trunk: 150,
                price: 399.999,
                move: 50,
                brake: 10,
                faster: 20,
                color: ''
               },
               {
                name: 'Albany Washington',
                speed: 267,
                fuel: 80,
                trunk: 150,
                price: 399.999,
                move: 25,
                brake: 100,
                faster: 20,
                color: ''
               },
               {
                name: 'Albany Washington',
                speed: 267,
                fuel: 80,
                trunk: 150,
                move: 50,
                price: 399.999,
                brake: 5,
                faster: 20,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                move: 50,
                price: 399.999,
                brake: 10,
                faster: 20,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                move: 50,
                brake: 50,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                move: 50,
                brake: 65,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                move: 50,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                color: ''
               },
               {
                name: 'BMW M5 Competition',
                speed: 267,
                fuel: 80,
                trunk: 150,
                color: ''
               },
        ],
        colors:['#000000', '#FFFFFF', '#E7383B', '#FBC930', '#4374C7', '#29D2AF', '#1CDEFE', '#FA8A00']
        }
    },
    computed: {
        stats(){
            let bar = document.querySelector('.bart') // !Кстати, есть еще одна проблема рефсов: при компиляции, когда дом загрузился - вью не успевает понять: что такое рефс
            let speed = this.currentCarStats.speed * bar.offsetWidth / 500
            let moving = this.currentCarStats.move * bar.offsetWidth / 100
            let brake = this.currentCarStats.brake * bar.offsetWidth / 100
            let fast = this.currentCarStats.faster * bar.offsetWidth / 100
            return {
                speed: !speed ? 0 : speed,
                move: !moving ? 0 : moving,
                brake: !brake ? 0 : brake ,
                fast: !fast ? 0 : fast
            }
        },
    },
    methods: {
        send(card) {
            
        }
    },
  })