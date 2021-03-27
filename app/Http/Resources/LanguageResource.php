<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LanguageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'id'         => $this->id,
                'type'       => 'languages',
                'attributes' => [
                    'name'       => $this->name,
                    'locale'     => $this->locale,
                    'updated_at' => $this->updated_at,
                    'created_at' => $this->created_at,
                ]
            ],
        ];
    }
}
