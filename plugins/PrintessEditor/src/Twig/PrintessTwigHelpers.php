<?php declare(strict_types=1);

namespace PrintessEditor\Twig;

use Shopware\Core\Framework\Context;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class PrintessTwigHelpers extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('createMd5Hash', [$this, 'createMd5Hash']),
        ];
    }

    public function productHasPrintessTemplate($product)
    {
        
    }

    public function getProductById($id, Context $context) {
        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('id', $id));
        $criteria->addAssociations(['options', 'options.group', 'properties', 'properties.group']);
        $product = $this->productGateway->search($criteria, $context)->getElements();
  
        if($product !== null && count($product) > 0) {
          $product = $product[$id];
        }
  
        return $product;
    }
}

?>