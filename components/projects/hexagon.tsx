"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { hexagonData as allHexagonData } from "@/data";

const filteredHexagonData = allHexagonData.filter((h) => (h as any).visible !== false);

// Tipos para los datos del hexágono
interface HexagonData {
  id: number | string;
  name: string;
  backgroundImage: string;
  link: string;
}

interface HexagonProps {
  data: HexagonData;
  className?: string;
}

// CONFIGURACIÓN DE TAMAÑO DEL HEXÁGONO
const hexSize = {
  width: 128*1.4,  // Ancho en pixels (también cambia w-32 abajo)
  height: 144*1.4, // Alto en pixels (también cambia h-36 abajo)
};

const _gap = 20;
const _horizontalSpacing = hexSize.width + _gap;
const _verticalSpacing = hexSize.height * 0.75 + _gap;
const _rowOffset = (hexSize.width + _gap) / 2;

interface HexagonalGridProps {
  rows: number[][];
  showAll?: boolean;
}
// Componente Hexagon que recibe data
function Hexagon({ data, className = "" }: HexagonProps) {
  return (
    <Link href={data.link} className="block">
      <div
        className={`relative group ${className}`}
        style={{
          width: `${hexSize.width}px`,
          height: `${hexSize.height}px`,
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center relative group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
        />
        {/* Overlay — warm foreground tint, fades on hover */}
        <div className="absolute inset-0 bg-foreground/80 group-hover:bg-foreground/20 transition-all duration-500" />

        {/* Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-background group-hover:text-white font-normal text-sm tracking-wide text-center px-3 relative z-10 transition-colors duration-500">
            {data.name}
          </span>
        </div>
      </div>
    </Link>
  );
}

// Grilla hexagonal configurable
export default function HexagonalGrid({ rows, showAll = false }: HexagonalGridProps) {
  const hexagonData = showAll ? allHexagonData : filteredHexagonData;
  const gridConfig = rows.map((row) => row.map((v) => v === 1));

  const maxCols = Math.max(...rows.map((r) => r.length));
  const totalRows = rows.length;
  const GRID_WIDTH = (maxCols - 1) * _horizontalSpacing + hexSize.width + _rowOffset;
  const GRID_HEIGHT = (totalRows - 1) * _verticalSpacing + hexSize.height;

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      const padding = 32;
      const newScale = vw < 768 ? Math.min(1, (vw - padding) / GRID_WIDTH) : 1;
      setScale(newScale);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [GRID_WIDTH]);

  interface HexagonInRow {
    data: HexagonData;
    colIndex: number;
  }

  interface RowData {
    rowIndex: number;
    isOffsetRow: boolean;
    hexagons: HexagonInRow[];
  }

  let dataIndex = 0;
  const visibleRows: RowData[] = gridConfig.map((rowConfig, rowIndex) => {
    const isOffsetRow = rowIndex % 2 === 1;
    const hexagons: HexagonInRow[] = [];

    rowConfig.forEach((show, colIndex) => {
      if (show) {
        hexagons.push({
          data: dataIndex < hexagonData.length
            ? hexagonData[dataIndex]
            : { id: `placeholder-${dataIndex}`, name: "Coming Soon", backgroundImage: "/fungi1.jpg", link: "#" },
          colIndex,
        });
        dataIndex++;
      }
    });

    return { rowIndex, isOffsetRow, hexagons };
  }).filter((row) => row.hexagons.length > 0);

  const gridWidth = GRID_WIDTH;
  const gridHeight = GRID_HEIGHT;

  return (
    <div
      className="flex items-center justify-center pt-8 px-10 pb-8"
      style={{ minHeight: scale < 1 ? `${GRID_HEIGHT * scale + 64}px` : undefined }}
    >
      {/* Contenedor que se ajusta al tamaño real de la grilla */}
      <div
        style={{
          width: `${gridWidth}px`,
          height: `${gridHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
        className="relative"
      >
        
          {visibleRows.map((row) => (
            <div 
              key={`row-${row.rowIndex}`}
              className="absolute flex" 
              style={{ 
                top: `${row.rowIndex * _verticalSpacing}px`,
                left: row.isOffsetRow ? `${_rowOffset}px` : '0px'
              }}
              >
              {row.hexagons.map((hex) => (
                <div 
                  key={hex.data.id} 
                  style={{ 
                    position: 'absolute',
                    left: `${hex.colIndex * _horizontalSpacing}px`
                  }}
                >
                  <Hexagon data={hex.data} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}