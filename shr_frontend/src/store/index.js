import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        candidateMail: "J.kraus@gamil.com",
        englishLevel: "",
        germanLevel: "",
        frenchLevel: "",
        candidateName : "",
        candidateFirstName : "",
        phone : "",
        contract: "",
        date: "",

        waitingCandidacy: [
            {
                name: "Jonathan Kraus",
                phone: "0474111221",
                mail: "j.kraus@student.helmo.be",
                pdf: "http://www.africau.edu/images/default/sample.pdf"
            },
            {
                name: "Antoine Demany",
                phone: "0474111221",
                mail: "a.demany@student.helmo.be",
                pdf: "http://www.africau.edu/images/default/sample.pdf"
            }
        ],

        listOffers: [
            {
                name: "Engineer",
                datedebut: "09/06/2021",
                datefin: "09/06/2022",
                nombre: "5 offers",
                statut: "pusblished"
            },
            {
                name: "Programmer",
                datedebut: "20/06/2021",
                datefin: "09/06/2022",
                nombre: "6 offers",
                statut: "pusblished"
            }
        ],

        offerSelected: [
            {
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis felis sit amet fringilla malesuada. Nunc id nisi orci. Phasellus bibendum sollicitudin arcu at lacinia. Mauris euismod suscipit ante, nec euismod lacus pulvinar in. Cras sollicitudin aliquet metus, a tincidunt lacus molestie sed. Nullam nunc quam, volutpat vel hendrerit vitae.",
                challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis felis sit amet fringilla malesuada. Nunc id nisi orci. Phasellus bibendum sollicitudin arcu at lacinia. Mauris euismod suscipit ante, nec euismod lacus pulvinar in. Cras sollicitudin aliquet metus, a tincidunt lacus molestie sed. Nullam nunc quam, volutpat vel hendrerit vitae.",
                skills: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis felis sit amet fringilla malesuada. Nunc id nisi orci. Phasellus bibendum sollicitudin arcu at lacinia. Mauris euismod suscipit ante, nec euismod lacus pulvinar in. Cras sollicitudin aliquet metus, a tincidunt lacus molestie sed. Nullam nunc quam, volutpat vel hendrerit vitae.",
                date: "27/10/2021",
                emploi: "CDI"
            }
        ],

        restaurantName: "La belle vue",
        shoppingCart: 0,
        simpleMenu: [
            {
                name: "Croissant",
                image: {
                    source: "/images/crossiant.jpg",
                    alt: "Un croissant"
                },
                inStock: true,
                quantity: 1,
                price: 2.99
            },
            {
                name: "Baguette de pain",
                image: {
                    source: "/images/french-baguette.jpeg",
                    alt: "Quatre baguettes de pain"
                },
                inStock: true,
                quantity: 1,
                price: 3.99
            },
            {
                name: "Éclair",
                image: {
                    source: "/images/eclair.jpg",
                    alt: "Éclair au chocolat"
                },
                inStock: false,
                quantity: 1,
                price: 4.99
            }
        ]
    },
    getters: {
        copyright: (state) => {
            const currentYear = new Date().getFullYear()
            return `Copyright ${state.restaurantName} ${currentYear}`
        },

        getMail:  (state) => {
            return state.candidateMail
        },

        getFirstName:  (state) => {
            return state.candidateFirstName
        },

        getLastName:  (state) => {
            return state.candidateName
        },

        getPhone:  (state) => {
            return state.phone
        },

        getEnglishLevel: (state) => {
            return state.englishLevel
        },

        getGermanLevel: (state) => {
            return state.germanLevel
        },

        getFrenchLevel: (state) => {
            return state.frenchLevel
        },

        getDate: (state) => {
            return state.date
        },

        getContract: (state) => {
            return state.contract
        }

    },
    mutations: {
        /*ADD_ITEMS_TO_SHOPPING_CART(state, amount) {
            state.shoppingCart += amount
        },*/
        add_user_mail(state, mail ){
            state.candidateMail = mail
        },

        add_user_firstname(state, firstname ){
            state.candidateFirstName = firstname
        },

        add_user_lastname(state, lastname){
            state.candidateName = lastname
        },

        add_user_phone(state, phone ){
            state.candidatePhone = phone
        },

        add_user_english_level(state, englishLevel ){
            state.englishLevel = englishLevel
        },

        add_user_german_level(state, germanLevel){
            state.germanLevel = germanLevel
        },

        add_user_french_level(state, frenchLevel){
            state.frenchLevel = frenchLevel
        },

        add_user_date(state, date){
            state.date = date
        },

        add_user_contract(state, contract){
            state.contract = contract
        },

    },
    actions: {
       /* updateShoppingCart({ commit }, amount) {
            commit("ADD_ITEMS_TO_SHOPPING_CART", amount)
        },*/

        updateUserMail({ commit }, mail, firstname, lastname, phone, englishLevel, frenchLevel, germanLevel, date, contract){
            commit("add_user_mail", mail, firstname, lastname, phone, englishLevel, frenchLevel, germanLevel, date, contract)
        },

        updateUserFirstName({ commit }, firstname){
            commit("add_user_firstname", firstname)
        },

        updateUserLastName({ commit }, lastname){
            commit("add_user_lastname", lastname)
        },

        updateUserPhone({ commit }, phone){
            commit("add_user_phone", phone)
        },

        updateUserEnglish({ commit }, englishLevel){
            commit("add_user_english_level", englishLevel)
        },

        updateUserGerman({ commit }, germanLevel){
            commit("add_user_german_level", germanLevel)
        },

        updateUserFrench({ commit }, frenchLevel){
            commit("add_user", frenchLevel)
        },

        updateUserDate({ commit }, date){
            commit("add_user_date", date)
        },

        updateUserContract({ commit }, contract){
            commit("add_user_contract", contract)
        },


    },
    modules: {}
})
