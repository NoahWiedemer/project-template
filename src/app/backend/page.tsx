'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

export default function ExampleList() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setRecipes(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch recipes')
        console.error('Error fetching recipes:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent"></div>
          <p className="text-gray-400 text-lg">Loading recipes...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-md w-full">
          <div className="text-red-400 text-center">
            <h2 className="text-xl font-semibold mb-2">Error Loading Recipes</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          Recipe Examples
        </span>
      </h1>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {recipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl border border-gray-700"
          >
            <div className="relative h-56">
              <Image
                src={recipe.image || '/placeholder-recipe.jpg'}
                alt={recipe.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">{recipe.name}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-600/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-gray-400 text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-red-400">⏱</span> {recipe.prepTime}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-400">📊</span> {recipe.difficulty}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-400">👥</span> {recipe.servings} servings
                </p>
              </div>
              
              <Link href={`/backend/${recipe.id}`} className="mt-6 block w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2.5 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 font-medium shadow-lg shadow-red-600/20 text-center">
                View Recipe
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}