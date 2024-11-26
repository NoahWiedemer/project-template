import { supabase } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

// Type for our recipe
export interface Recipe {
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

// Sample recipes for initial data
const sampleRecipes: Omit<Recipe, 'id' | 'created_at'>[] = [
  {
    name: "Buddha Bowl with Quinoa",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    servings: 4,
    prepTime: "45 mins",
    tags: ["vegan", "gluten-free"],
    difficulty: "medium"
  },
  {
    name: "Grilled Salmon",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    servings: 4,
    prepTime: "30 mins",
    tags: ["pescatarian", "high-protein"],
    difficulty: "medium"
  }
]

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    // If no data, insert sample recipes
    if (!data || data.length === 0) {
      const { data: insertedData, error: insertError } = await supabase
        .from('recipes')
        .insert(sampleRecipes)
        .select()

      if (insertError) throw insertError
      return NextResponse.json(insertedData)
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('GET Error:', error)
    return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const recipe = await request.json()
    
    const { data, error } = await supabase
      .from('recipes')
      .insert([recipe])
      .select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: 'Failed to add recipe' }, { status: 500 })
  }
} 