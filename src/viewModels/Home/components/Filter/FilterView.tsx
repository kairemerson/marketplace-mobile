import React, { FC } from 'react'
import { useFilterViewModel } from './useFilter.viewModel'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../../../../styles/colors'
import { AppInput } from '../../../../shared/components/AppInput'
import { AppButton } from '../../../../shared/components/AppButton'
import Checkbox from "expo-checkbox"

export const FilterView:FC<ReturnType<typeof useFilterViewModel>> = ({
    isLoading, 
    productsCategory,
    handleCategoryToggle,
    handleValueMaxChange,
    handleValueMinChange,
    selectedCategories,
    handleApplyFilters,
    handleResetFilter
  }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between py-4 px-6">
        <Text className="text-lg font-bold text-gray-900">
          Filtrar anúncios
        </Text>
        <TouchableOpacity>
          <Ionicons name="close" size={20} color={colors['purple-base']} />
        </TouchableOpacity>
      </View>

      <View className="py-4 px-6">
        <Text className="font-semibold text-base text-gray-300">VALOR</Text>
        <View className="flex-row mb-4 w-full">
          <View className="flex-1">
            <AppInput
              onChangeText={(text) => handleValueMinChange(Number(text))}
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>
          <View className="flex-1">
            <AppInput
              onChangeText={(text) => handleValueMaxChange(Number(text))}
              placeholder="Até"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>
        </View>

        <Text className="font-semibold text-base text-gray-300">CATEGORIA</Text>

        {
          isLoading ? (
            <Text>Carregando categorias...</Text>
          ) :(
            <View className='mb-6 gap-3'>
              {
                productsCategory?.map(({name, id}) => (
                  <TouchableOpacity key={`product-category-${id}`} className='flex-row items-center py-2' onPress={() => handleCategoryToggle(id)}>
                    <Checkbox 
                      color={colors['purple-base']} 
                      className='mr-3 rounded-full' 
                      value={selectedCategories.includes(id)}
                      onValueChange={() => handleCategoryToggle(id)}
                    />
                    <Text className='text-base text-gray-400'>{name}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          )
        }


        <View className="flex-row gap-3 mt-4 mb-6">
          <View className="flex-1">
            <AppButton variant="outlined" onPress={handleResetFilter}>Limpar filtro</AppButton>
          </View>
          <View className="flex-1">
            <AppButton onPress={handleApplyFilters}>Filtrar</AppButton>
          </View>
        </View>
      </View>
    </View>
  )
}
