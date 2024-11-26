'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

// Using the same Recipe interface from the main page
interface Recipe {
  id?: number
  name: string
  category: string
  image: string
  servings: number
  prepTime: string
  tags: string[]
  difficulty: 'easy' | 'medium' | 'hard'
  created_at?: string
}

export default function RecipeDetail() {
  const params = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${params.id}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setRecipe(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch recipe')
        console.error('Error fetching recipe:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecipe()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent"></div>
          <p className="text-gray-400 text-lg">Loading recipe...</p>
        </div>
      </div>
    )
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-md w-full">
          <div className="text-red-400 text-center">
            <h2 className="text-xl font-semibold mb-2">Error Loading Recipe</h2>
            <p>{error || 'Recipe not found'}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700"
      >
        <div className="relative h-96">
          <Image
            src={recipe.image || '/placeholder-recipe.jpg'}
            alt={recipe.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-6">{recipe.name}</h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-red-600/20 text-red-400 px-4 py-1.5 rounded-full border border-red-600/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-red-400 font-semibold mb-2">Preparation Time</h3>
              <p className="text-white">{recipe.prepTime}</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-red-400 font-semibold mb-2">Difficulty</h3>
              <p className="text-white capitalize">{recipe.difficulty}</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-red-400 font-semibold mb-2">Servings</h3>
              <p className="text-white">{recipe.servings} people</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Category: <span className="text-white capitalize">{recipe.category}</span></span>
            <button 
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 font-medium shadow-lg shadow-red-600/20"
            >
              Back to Recipes
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}