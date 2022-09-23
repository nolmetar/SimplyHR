import Vue from 'vue'
import VueRouter from 'vue-router'
import DoPlanning from "@/views/DoPlanning";
import ViewPlanning from "@/views/ViewPlanning";
import CreateOffer from "@/views/CreateOffer";
import NavigateOfferR from "@/views/NavigateOfferR";
import NavigateOfferC from "@/views/NavigateOfferC";
import SelectOffer from "@/views/SelectOffer";
import ChoiceTimePassage from "@/views/ChoiceTimePassage";
import CandidateHistory from "@/views/CandidateHistory";
import ViewCVs from "@/views/ViewCVs";
import DisplayCandidacy from "@/views/DisplayCandidacy";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import CandidateInfo from "@/views/CandidateInfo";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'offers',
        component: CandidateInfo
    },
    {
        path: '/doPlanning',
        name: 'doPlanning',
        component: DoPlanning
    },
    {
        path: '/viewPlanning',
        name: 'viewPlanning',
        component: ViewPlanning
    },
    {
        path: '/createOffer',
        name: 'createOffer',
        component: CreateOffer
    },
    {
        path: '/navigateOfferR',
        name: 'navigateOfferR',
        component: NavigateOfferR
    },
    {
        path: '/navigateOfferC',
        name: 'navigateOfferC',
        component: NavigateOfferC
    },
    {
        path: '/selectOffer',
        name: 'selectOffer',
        component: SelectOffer
    },
    {
        path: '/choiceTimePassage',
        name: 'choiceTimePassage',
        component: ChoiceTimePassage
    },
    {
        path: '/candidateHistory',
        name: 'candidateHistory',
        component: CandidateHistory
    },
    {
        path: '/viewCVs',
        name: 'viewCVs',
        component: ViewCVs
    },
    {
        path: '/displayCandidacy',
        name: 'displayCandidacy',
        component: DisplayCandidacy
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/candidateInfo',
        name: 'candidateInfo',
        component: CandidateInfo
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
