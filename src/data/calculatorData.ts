import { Activity, BedDouble, Dumbbell, Flame, HeartPulse, Hourglass, LineChart, Ruler, Scale, Salad, Target, Timer, Utensils, Waves, Weight } from 'lucide-react'
import type { CalculatorDefinition } from '../types/health'

export const calculators: CalculatorDefinition[] = [
  {id:'bmi',title:'BMI Calculator',description:'Calculate your Body Mass Index.',category:'Body & BMI',icon:Scale},
  {id:'bmr',title:'BMR Calculator',description:'Estimate energy used at rest.',category:'Body & BMI',icon:Flame},
  {id:'ideal-weight',title:'Ideal Weight',description:'Explore a broad reference range.',category:'Body & BMI',icon:Ruler},
  {id:'body-fat',title:'Body Fat Percentage',description:'Estimate body-fat percentage.',category:'Body & BMI',icon:Activity},
  {id:'lean-mass',title:'Lean Body Mass',description:'Estimate your non-fat body mass.',category:'Body & BMI',icon:Weight},
  {id:'waist-height',title:'Waist-to-Height Ratio',description:'Compare waist circumference to height.',category:'Body & BMI',icon:LineChart},
  {id:'daily-calories',title:'Daily Calorie Requirement',description:'Estimate daily energy needs.',category:'Nutrition',icon:Utensils},
  {id:'calorie-change',title:'Calorie Deficit / Surplus',description:'Plan a cautious calorie adjustment.',category:'Nutrition',icon:Target},
  {id:'protein',title:'Protein Requirement',description:'Estimate a daily protein range.',category:'Nutrition',icon:Dumbbell},
  {id:'macros',title:'Macronutrient Calculator',description:'Split calories across macronutrients.',category:'Nutrition',icon:Salad},
  {id:'calorie-burn',title:'Calorie Burn',description:'Estimate exercise energy expenditure.',category:'Nutrition',icon:Timer},
  {id:'water',title:'Water Intake',description:'Estimate a daily fluid starting point.',category:'Lifestyle',icon:Waves},
  {id:'sleep',title:'Sleep Calculator',description:'Find a practical target bedtime.',category:'Lifestyle',icon:BedDouble},
  {id:'target-heart-rate',title:'Target Heart Rate',description:'Estimate an exercise heart-rate range.',category:'Lifestyle',icon:HeartPulse},
  {id:'heart-rate-zones',title:'Heart Rate Zones',description:'Estimate personalised training zones.',category:'Lifestyle',icon:Hourglass}
]
