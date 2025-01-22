def main():
    # Inicializamos los últimos 3 números
    last3 = [2023, 2024, 2025]

    iterator = 1

    # Variable para almacenar el último número calculado
    final_result = None

    # Iteramos hasta 2 millones
    while iterator <= 2_023_202_320_232_023:
        final_result = sum(last3[-3:])
        last3.append(final_result)

        # Limitar el tamaño del arreglo a los últimos 3 elementos
        last3 = last3[-3:]
        iterator += 1

    # Imprimir el resultado final
    print(f"Final result after 2,000,000 iterations: {final_result}")

if __name__ == "__main__":
    main()
